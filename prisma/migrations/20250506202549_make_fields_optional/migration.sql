BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[MORA] ALTER COLUMN [IMPUESTO] DECIMAL(38,2) NULL;
ALTER TABLE [dbo].[MORA] ALTER COLUMN [TREN_DE_ASEO] DECIMAL(38,2) NULL;
ALTER TABLE [dbo].[MORA] ALTER COLUMN [TASA_BOMBEROS] DECIMAL(38,2) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
