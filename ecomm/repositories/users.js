const fs = require('fs');
const crypto = require('crypto');
const { report } = require('process');

class UsersRespository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a respository requires a filename')
    }

    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }
  
  async getAll() {
    /** Original code before refactor
    // Open the file called this.filename
    const contents = await fs.promises.readFile(this.filename, {
      encoding: 'utf8'
    })
    // Read its contents
    console.log(contents)
    // parse the content
    const data = JSON.parse(contents);
    // return the parse data
    return data;
    */

    return JSON.parse(
      await fs.promises.readFile(this.filename, {
      encoding: 'utf8'
    })
    );
  }

  async create(attrs) {
    // { email: 'lorem@ipsume.com', password: '45qe522'}
    attrs.id = this.randomId();
    const records = await this.getAll();

    records.push(attrs);
    //write updated records back to this.filename;
    await this.writeAll(records);

    return attrs;
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename, 
      JSON.stringify(records, null, 2)
    );
  }

  randomId() {
    return crypto.randomBytes(4).toString('hex');
  }

  async getOne(id) {
    const records = await this.getAll();
    return records.find(record => record.id === id);
  }

  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter(record => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  async update (id, attrs) {
    const records = await this.getAll();
    const record = records.find(record => record.id === id);

    if (!record) {
      throw new Error(`Record with id ${id} not found`);
    }

    Object.assign(record, attrs);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;
      // interate key pair in filters using in loop for object
      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  }
}

// create an instance to prevent needing to create an instance in other files
module.exports = new UsersRespository('users.json')


/**  TEST RULES
const test = async () => {
  const repo = new UsersRespository('users.json');
  //const user = await repo.getOne('ccde37f1');
  //console.log(user);
  //await repo.delete('ccde37f1');
  //await repo.create({email: 'testThree@test.com', password: 'mypassword'});
  //await repo.update('64feed', { password: 'newPassword'});
  const user = await repo.getOneBy({ id: '77b8abe9'});
  console.log(user);

  //const users = await repo.getAll();

};
test();
*/