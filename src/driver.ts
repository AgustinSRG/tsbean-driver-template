// Driver implementation

"use strict";

import { DataSourceDriver, DataSource, GenericKeyValue, GenericRow, SortDirection, GenericFilter } from "tsbean-orm";

/**
 * Driver class
 */
export class TemplateDriver implements DataSourceDriver {

    /**
     * Creates a data source for this driver
     * @returns The data source
     */
    public static createDataSource(/* Pass here the options */): DataSource {
        const driver = new TemplateDriver();

        return new DataSource("tsbean.driver.template", driver);
    }

    // private connection: Connection;

    constructor(/* Pass here the connection object */) {
        // this.connection = connection;
    }

    /**
     * Finds a row by primary key
     * @param table Table or collection name
     * @param keyName Name of the key
     * @param keyValue Value of the key
     */
    findByKey(table: string, keyName: string, keyValue: any): Promise<GenericRow> {
        throw new Error("Method not implemented.");
    }

    /**
     * Finds rows
     * @param table Table or collection name
     * @param filter Filter to apply
     * @param sortBy Sort results by this field. Leave as null for default sorting
     * @param sortDir "asc" or "desc". Leave as null for default sorting
     * @param skip Number of rows to skip. Leave as -1 for no skip
     * @param limit Limit of results. Leave as -1 for no limit
     * @param projection List of fields to featch from the table. Leave as null to fetch them all.
     */
    find(table: string, filter: GenericFilter, sortBy: string, sortDir: SortDirection, skip: number, limit: number, projection: Set<string>): Promise<GenericRow[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * Counts the number of rows matching a condition
     * @param table Table or collection name
     * @param filter Filter to apply
     */
    count(table: string, filter: GenericFilter): Promise<number> {
        throw new Error("Method not implemented.");
    }

    /**
     * Finds rows (stream mode). You can parse each row with an ASYNC function
     * @param table Table or collection name
     * @param filter Filter to apply
     * @param sortBy Sort results by this field. Leave as null for default sorting
     * @param sortDir "asc" or "desc". Leave as null for default sorting
     * @param skip Number of rows to skip. Leave as -1 for no skip
     * @param limit Limit of results. Leave as -1 for no limit
     * @param projection List of fields to featch from the table. Leave as null to fetch them all.
     * @param each Function to parse each row
     */
    findStream(table: string, filter: GenericFilter, sortBy: string, sortDir: SortDirection, skip: number, limit: number, projection: Set<string>, each: (row: GenericRow) => Promise<void>): Promise<void> {
        throw new Error("Method not implemented.");
    }


    /**
     * Finds rows (stream mode). You can parse each row with a SYNC function
     * @param table Table or collection name
     * @param filter Filter to apply
     * @param sortBy Sort results by this field. Leave as null for default sorting
     * @param sortDir "asc" or "desc". Leave as null for default sorting
     * @param skip Number of rows to skip. Leave as -1 for no skip
     * @param limit Limit of results. Leave as -1 for no limit
     * @param projection List of fields to featch from the table. Leave as null to fetch them all.
     * @param each Function to parse each row
     */
    findStreamSync(table: string, filter: GenericFilter, sortBy: string, sortDir: SortDirection, skip: number, limit: number, projection: Set<string>, each: (row: any) => void): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * Inserts a row
     * @param table Table or collection name
     * @param row Row to insert
     */
    insert(table: string, row: GenericRow): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * Inserts many rows
     * @param table Table or collection name
     * @param rows List of rows to insert
     */
    batchInsert(table: string, rows: GenericRow[]): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * Updates a row
     * @param table Table or collection name
     * @param keyName Name of the key
     * @param keyValue Value of the key
     * @param updated Updated row
     */
    update(table: string, keyName: string, keyValue: GenericKeyValue, updated: GenericRow): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * Updates many rows
     * @param table Table or collection name
     * @param filter Filter to apply
     * @param updated Updated row
     * @returns The number of affected rows
     */
    updateMany(table: string, filter: GenericFilter, updated: GenericRow): Promise<number> {
        throw new Error("Method not implemented.");
    }

    /**
     * Deletes a row
     * @param table Table or collection name
     * @param keyName Name of the key
     * @param keyValue Value of the key
     * @returns true if the row was deleted, false if the row didn't exists
     */
    delete(table: string, keyName: string, keyValue: GenericKeyValue): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    /**
     * Deletes many rows
     * @param table Table or collection name
     * @param filter Filter to apply
     * @returns The number of affected rows
     */
    deleteMany(table: string, filter: GenericFilter): Promise<number> {
        throw new Error("Method not implemented.");
    }

    /**
     * Summatory of many rows
     * @param table Table or collection name
     * @param filter Filter to apply
     * @param id Name of the primary key
     * @param field Name of the field to aggregate
     */
    sum(table: string, filter: GenericFilter, id: string, field: string): Promise<number> {
        throw new Error("Method not implemented.");
    }

    /**
     * Atomic increment
     * @param table Table or collection name
     * @param keyName The name of the key
     * @param keyValue The value ofthe key
     * @param prop The field to increment
     * @param inc The amount to increment
     */
    increment(table: string, keyName: string, keyValue: GenericKeyValue, prop: string, inc: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
