import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tirada.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tirada (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL);',
                [],
                () => { resolve()},
                (_, err) => { reject(err) })
        })
    })

    return promise

}

export const insertTirada = (title) => {
    const promise = new Promise((resolve,reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO tirada (title) VALUES (?);`,
                [title],
                (_, result) => {
                    resolve(result);
                },
                (_,err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const fetchTirada = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM tirada',
                [],
                (_, result) => {
                    console.log('Resultado ', result.rows)
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}