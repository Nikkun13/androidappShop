import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tiradaDados.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tiradaDados (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, dados TEXT NOT NULL);',
                [],
                () => { resolve()},
                (_, err) => { reject(err) })
        })
    })

    return promise

}

export const insertTirada = (title, dados) => {
    const promise = new Promise((resolve,reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO tiradaDados (title, dados) VALUES (?, ?);`,
                [title, dados],
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
                'SELECT * FROM tiradaDados',
                [],
                (_, result) => {
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