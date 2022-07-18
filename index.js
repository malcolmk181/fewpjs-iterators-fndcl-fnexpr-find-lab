const superbowlWin = arr => {
    const result = arr.find(game => game.result === "W");
    return (result ? result.year : undefined);
}