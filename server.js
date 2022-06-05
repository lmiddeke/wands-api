const express = require('express')
const app = express()
const PORT = 8000


const wands = {
    'harry potter':{
        'core':'Phoenix feather',
        'wood':'Holly',
        'length':'11 inches',
        'owner':'Harry Potter',
        'made':'before 1938',
        'manufact': 'Garrick Ollivander'
    },
    'hermione granger':{
        'core':'Dragon Heartstring',
        'wood':'Vine',
        'length':'10.75 inches',
        'owner':'Hermione Granger',
        'made':'Before 1991',
        'manufact': 'Garrick Ollivander'
    },
    'ronald weasley':{
        'core':'Unicorn Hair',
        'wood':'Willow',
        'length':'14 inches',
        'owner':'Ronald Weasley',
        'made':'Before 1994',
        'manufact': 'Garrick Ollivander'
    },
    'draco malfoy':{
        'core':'Unicorn Hair',
        'wood':'Hawthorn',
        'length':'10 inches',
        'owner':'Draco Malfoy',
        'made':'Before 1991',
        'manufact': 'Garrick Ollivander'
    },
    'nevile longbottom':{
        'core':'Unicorn Hair',
        'wood':'Cherry',
        'length':'13 inches',
        'owner':'Nevile Longbottom',
        'made':'Before 1997',
        'manufact': 'Garrick Ollivander'
    },
    'unknown':{
        'core':'unknown',
        'wood':'unknown',
        'length':'unknown',
        'owner':'unknown',
        'made':'unknown',
        'manufact': 'unknown'
    }
}

// class Wands{
//     constructor(core,wood,wandLength,char,owner,made,manufact){
//         this.core = core,
//         this.wood = wood,
//         this.wandLength = wandLength,
//         this.owner = owner,
//         this.made = made,
//         this.manufact = manufact
//     }
// }

// const person = {
//     'Harry Potter': new Wands('Phoenix Feather','Holly','11"','Harry Potter','Before 1938','Garrick Ollivander'),
//     'Hermione Granger': new Wands('Dragon Heartstring','Vine','10.75"','Hermione Granger','Before 1991','Garrick Ollivander'),
//     'Ronald Weasley': new Wands('Unicorn Hair','Willow','14"','Ronald Weasley','Before 1994','Garrick Ollivander'),
//     'Draco Malfoy': new Wands('Unicorn Hair','Hawthorn','10"','Draco Malfoy','Before 1991','Garrick Ollivander'),
//     'Nevile Longbottom': new Wands('Unicorn Hair','Cherry','13"','Nevile Longbottom','Before 1997','Garrick Ollivander'),
// }


app.get('/', (request, response)=>{      //are 2 parameters 
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const personName = request.params.name.toLowerCase()
    if(wands[personName]){
        response.json(wands[personName])
    }else{
        response.json(wands['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`Magic is flowing on ${PORT}!`)
})