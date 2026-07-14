function ListofPlayers() {

    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 82 },
        { name: "Gill", score: 67 },
        { name: "Rahul", score: 45 },
        { name: "Hardik", score: 74 },
        { name: "Jadeja", score: 88 },
        { name: "Pant", score: 69 },
        { name: "Surya", score: 91 },
        { name: "Bumrah", score: 25 },
        { name: "Shami", score: 60 },
        { name: "Siraj", score: 78 }
    ];

    return (
        <div>
            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    <ul><li>{player.name} - {player.score}</li></ul>
                </p>
            ))}

            <hr />

            <h2>Players with Score below 70</h2>

            {players
                .filter(player => player.score < 70)
                .map((player, index) => (
                    <p key={index}>
                        <ul><li>{player.name} - {player.score}</li></ul>
                    </p>
                ))
            }
        </div>
    );
}

export default ListofPlayers;