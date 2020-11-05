class Player {

    constructor()
    {
        

    }
    getCount()
        {
            var readPlayer=database.ref('playerCount')
            readPlayer.on("value",function(data){playerCount=data.val()})
        }
    updateCount(count)
    {
        database.ref('/').update({playerCount:count})
    }
    updateName(name)
    {
        var playerNumber="player"+playerCount
        database.ref(playerNumber).set({name:name})
    }







}