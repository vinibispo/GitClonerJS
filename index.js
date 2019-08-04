const {spawn} = require('child_process')
const gcl = spawn('git', ['clone', `https://github.com/${process.argv[2]}/${process.argv[3]}.git`])
gcl.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

gcl.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`)
})

gcl.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})

