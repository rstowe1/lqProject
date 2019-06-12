-- Clear Client Database--
SET SQL_SAFE_UPDATES = 0;
DELETE FROM CD_Month_1;

-- Proof that Client Database was cleared
SELECT * FROM recon_db.CD_Month_1;


-- insert lease Data into Client table
INSERT INTO CD_Month_1 (
	Lease_Id,
    Lease_Description)
    Select Lease_Id,
		Lease_Description
			FROM LQ_Month_1;


-- Proof that Client Data was populated
SELECT * FROM CD_Month_1;


-- check lq for missing data
SELECT * FROM recon_db.LQ_Month_1
where Lease_Id not in (select Lease_Id from CD_Month_1);


-- Check Client Data for missing items
SELECT * FROM recon_db.CD_Month_1
WHERE Lease_Id NOT IN (SELECT Lease_Id from LQ_Month_1);