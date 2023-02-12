const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: 'source/to/path/test.sqlite' });

let saveSignup = () => {
    const name = document.getElementById('txtName');
    //const age = document.getElementById('txtAge');

    const account = db.table('account');
    let setName = account.set('username', name.value);
    const fetchName = db.get('username');

    alert(fetchName);
}