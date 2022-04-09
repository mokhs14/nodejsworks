const yargs = require('yargs')


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
    handler: function() {
        console.log("title:", argv.title)
        console.log("body:", argv.body)
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