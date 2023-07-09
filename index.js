const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client(
    {intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates
    ] }
)

var oldNumberWar = 0;
var oldNumberValorant = 0;

client.once(Events.ClientReady, ()=>{
    console.log(`ready`);
});

client.on(Events.VoiceStateUpdate, (oldState, newState) => {
    const newUserChannel = newState.channelId;
    const textChannel = client.channels.cache.get('1126146004882821120')

    console.log("canale triggerato new: ", newUserChannel);

    const numberWar = client.channels.cache.get("1126144753143128104").members.size;
    const numberValorant = client.channels.cache.get("1126144966234746970").members.size;

    if(newUserChannel === '1126144753143128104') {
        console.log(numberWar);
        if(numberWar == 1 && oldNumberWar==0){
            console.log("il canale è corretto scrivo il messaggio");
            textChannel.send(`si gioca a WT`);
        }
    }

    if(newUserChannel === '1126144966234746970') {
        console.log(numberValorant);
        if(numberValorant == 1 && oldNumberValorant==0){
            console.log("il canale è corretto scrivo il messaggio");
            textChannel.send(`si gioca a Valorant`);
        }
    }

    oldNumberWar=numberWar;
    oldNumberValorant=numberValorant;
})

client.login("MTEyNjgwMzY1ODY0NzAzMTgzOA.GH-kyN.wZ_aYLetL4r_d_AOLT4a4o6UKi2UAIUB9zGuhY")
