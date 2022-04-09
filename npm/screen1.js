const yargs = require('yargs')
const backend = require('./backend')

yargs.version('1.1.0')


yargs.command({
    command: "add",
    description: "adds the note",
    builder: {

        title: {
            title: "note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            title: "body of the note",
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        backend.addnotes(argv.title, argv.body)
            // console.log('added notes')
    }

})

yargs.command({
    command: "remove",
    description: "removes the note",
    handler: function() {
        console.log("removed your note!!")
    }

})

yargs.command({
    command: "read",
    description: "reads the note",
    handler: function() {
        console.log("your notes are read!!")
    }

})

yargs.command({
    command: "list",
    description: "lists the note",

    handler: function(argv) {
        console.log("this is your list")
    }

})

yargs.parse()