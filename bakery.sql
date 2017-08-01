CREATE DATABASE  IF NOT EXISTS `bakery` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bakery`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: bakery
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productMaster`
--

DROP TABLE IF EXISTS `productMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productMaster` (
  `productId` varchar(10) NOT NULL,
  `productName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productMaster`
--

LOCK TABLES `productMaster` WRITE;
/*!40000 ALTER TABLE `productMaster` DISABLE KEYS */;
INSERT INTO `productMaster` VALUES ('CF','Croissant'),('MB11','Blueberry Muffin'),('VS5','Vegemite Scroll');
/*!40000 ALTER TABLE `productMaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productPacks`
--

DROP TABLE IF EXISTS `productPacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productPacks` (
  `productId` varchar(10) DEFAULT NULL,
  `packs` int(3) DEFAULT NULL,
  `price` float(6,3) DEFAULT NULL,
  UNIQUE KEY `unique_idx` (`productId`,`packs`),
  KEY `product_id_idx` (`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productPacks`
--

LOCK TABLES `productPacks` WRITE;
/*!40000 ALTER TABLE `productPacks` DISABLE KEYS */;
INSERT INTO `productPacks` VALUES ('VS5',3,6.990),('VS5',5,8.990),('MB11',2,9.950),('MB11',5,16.950),('MB11',8,24.950),('CF',3,5.950),('CF',5,9.950),('CF',9,16.990);
/*!40000 ALTER TABLE `productPacks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-01 23:59:52
