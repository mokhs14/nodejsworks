const fs = require('fs')
const getnotes = function() {
    return 'your notes'
}
const addnotes = function(title, body) {
    const notes = loadNotes()
    const dupnotes = notes.filter(function(note) {
        return note.title === title
    })

    if (dupnotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note  added')
    } else {
        console.log('Note title taken')
    }

}

const saveNotes = function(notes) {
    const tojson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', tojson)
}

const loadNotes = function() {
    try {
        const jsonbuffer = fs.readFileSync('notes.json')
        const jsondata = jsonbuffer.toString
        return JSON.parse(jsondata)
    } catch (e) {
        return []
    }
}

module.exports = {
    addnotes: addnotes,
    getnotes: getnotes
}