const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function list(table) {
    const res = await pool.query(
        `SELECT * FROM ${table};`
    );
    return res.rows;
}

module.exports = {
    lb: async () => {
        const sql = `WITH all_players as 
        (
            SELECT player.* FROM player
                INNER JOIN discordmember ON discordmember.id=player.discord_member_id
                WHERE 
                    player.guild_id = 447883341463814144 AND 
                    player.is_banned = false AND
                    discordmember.is_banned = false
                ORDER BY player.elo DESC
        ),
        player_ids as (
            SELECT lineup.player_id FROM lineup
                INNER JOIN game ON lineup.game_id = game.id
                WHERE
                    game.guild_id = 447883341463814144 AND
                    game.completed_ts > '2020-08-17 17:53:49' AND
                    game.is_completed = true AND
                    game.is_ranked = true
        )
        
        SELECT pl.name, pl.elo FROM all_players pl WHERE pl.id IN (SELECT * FROM player_ids plids) ORDER BY pl.elo DESC;	
        `;
        const res = await pool.query(sql)
        return res.rows;
    },
    list_games: () => list('game'),
    list_players: () => list('players'),
    list_discordmembers: () => list('discordmember'),
    list_lineups: () => list('lineup'),
    list_squads: () => list('squad'),
    list_squadmembers: () => list('squadmember'),
    list_gamesides: () => list('gameside'),
    list_teams: () => list('team'),
    query: pool.query
}
