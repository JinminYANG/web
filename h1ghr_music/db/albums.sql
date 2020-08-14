-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: album_db
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` int NOT NULL,
  `at_name` varchar(45) COLLATE utf8_bin NOT NULL,
  `ab_name` varchar(45) COLLATE utf8_bin NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'jay_park','깡 Official Remix','2020-06-04'),(2,'jay_park','All The Way Up','2020-04-25'),(3,'jay_park','This Wasn\'t Supposed To Happen\n','2019-11-16'),(4,'jay_park','Nothing Matters','2019-07-02'),(5,'jay_park','The Road Less Traveled','2019-06-07'),(6,'jay_park','Finish Line Remix','2019-01-01'),(7,'jay_park','Finish Line','2018-11-09'),(8,'jay_park','V','2018-09-10'),(9,'jay_park','SOJU Remix','2018-07-01'),(10,'jay_park','FSU','2018-07-06'),(11,'jay_park','ASK BOUT ME','2018-07-20'),(12,'jay_park','SOJU','2018-05-25'),(13,'jay_park','RUN IT','2018-01-17'),(14,'jay_park','Birthday Gamble','2017-12-11'),(15,'jay_park','LOVE MY LIFE','2017-07-07'),(16,'jay_park','Raw Sh!t','2017-04-03'),(17,'jay_park','Hulk Hogan','2017-03-08'),(18,'jay_park','곁에 있어주길 (STAY WITH ME)','2016-10-12'),(19,'jay_park','EVERYTHING YOU WANTED','2016-10-20'),(20,'jay_park','Me like yuh','2016-09-02'),(21,'jay_park','사실은 (The Truth Is)','2016-03-22'),(22,'jay_park','WORLDWIDE','2015-11-05'),(23,'jay_park','Solo','2015-09-24'),(24,'jay_park','My Last','2015-07-17'),(25,'jay_park','몸매 (MOMMAE)','2015-05-22'),(26,'jay_park','EVOLUTION','2014-09-01'),(27,'jay_park','나나 (NaNa)','2014-07-25'),(28,'jay_park','메트로놈 (Metronome)','2014-04-11'),(29,'jay_park','I Like 2 Party','2013-07-10'),(30,'jay_park','JOAH','2013-04-10'),(31,'jay_park','TAKE HD Special Maxi Album','2012-02-07'),(32,'jay_park','New Breed','2012-02-07'),(33,'jay_park','New Breed Part.1','2011-12-28'),(34,'jay_park','Girl Friend','2011-11-03'),(35,'jay_park','Demon','2011-09-05'),(36,'jay_park','TAKE A DEEPER LOOK','2011-04-27'),(37,'jay_park','Bestie','2010-10-26'),(38,'jay_park','믿어줄래','2010-07-13');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-14 13:16:34
