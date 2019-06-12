DROP DATABASE IF EXISTS recon_db;

CREATE DATABASE recon_db;
USE recon_db;

CREATE TABLE CD_Month_1(
 Lease_Id int(25),
 Lease_Description VARCHAR(25) null,
 Base_Rent decimal(25,2) null,
 Additional_Payments dec(25,2) null,
 Total dec(25,2) null,
 PRIMARY KEY (Lease_Id)
);
CREATE TABLE CD_Month_2(
 Lease_Id BIGINT(255),
 Lease_Description VARCHAR(255),
 Base_Rent BIGINT(255),
 Additional_Payments BIGINT(255),
 Total BIGINT(255),
 PRIMARY KEY (Lease_Id)
);
CREATE TABLE CD_Month_3(
 Lease_Id INT(255),
 Lease_Description VARCHAR(255),
 Base_Rent BIGINT(255),
 Additional_Payments BIGINT(255),
 Total BIGINT(255),
 PRIMARY KEY (Lease_Id)
);
CREATE TABLE LQ_Month_1(
 Lease_Id INT(25),
 Lease_Description VARCHAR(25) null,
 Base_Rent dec(25,2) null,
 Additional_Payments dec(25,2) null,
 Total decimal(25,2) null,
 PRIMARY KEY (Lease_Id)
);
CREATE TABLE LQ_Month_2(
 Lease_Id BIGINT(255),
 Lease_Description VARCHAR(255),
 Base_Rent BIGINT(255),
 Additional_Payments BIGINT(255),
 Total BIGINT(255),
 PRIMARY KEY (Lease_Id)
);
CREATE TABLE LQ_Month_3(
 Lease_Id BIGINT(255),
 Lease_Description VARCHAR(255),
 Base_Rent BIGINT(255),
 Additional_Payments BIGINT(255),
 Total BIGINT(255),
 PRIMARY KEY (Lease_Id)
);
