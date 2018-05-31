-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2018 at 03:02 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `symfony_riolib`
--
CREATE DATABASE IF NOT EXISTS `symfony_riolib` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `symfony_riolib`;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE IF NOT EXISTS `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'https://marketplace.canva.com/MAB___U-clw/1/0/thumbnail_large/canva-yellow-lemon-children-book-cover-MAB___U-clw.jpg',
  `isborrowed` tinyint(1) DEFAULT '0',
  `genre_id` int(11) DEFAULT '1',
  `librarysection_id` int(11) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `IDX_CBE5A3314296D31F` (`genre_id`),
  KEY `IDX_CBE5A3318F4335EB` (`librarysection_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `author`, `img`, `isborrowed`, `genre_id`, `librarysection_id`) VALUES
(2, 'Goosebumps Book', 'R.L. Stine', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cvuNet2rxPiTf9L0eQRNpBi7zgp.jpg', 0, 1, 1),
(3, 'The Grapes of Wrath', 'John Steinbeck', 'https://images-na.ssl-images-amazon.com/images/I/51ttBHCU49L._SX305_BO1,204,203,200_.jpg', 0, 2, 1),
(5, 'Goosebumps Book ', 'R.L. Stine', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cvuNet2rxPiTf9L0eQRNpBi7zgp.jpg', 0, 1, 1),
(7, '', '', '', 0, NULL, NULL),
(8, '', '', '', 0, NULL, NULL),
(9, '', '', '', 0, NULL, NULL),
(12, '', '', NULL, 0, NULL, NULL),
(15, 'Hi Five', 'asdf', 'https://images-na.ssl-images-amazon.com/images/I/51ttBHCU49L._SX305_BO1,204,203,200_.jpg', 1, 1, 1),
(17, 'The Lord Of the Rigns', 'JRR Tolkien', 'https://images-na.ssl-images-amazon.com/images/I/51ttBHCU49L._SX305_BO1,204,203,200_.jpg', 0, 1, 1),
(18, 'Anne of Green Gables', 'Shakeaspeare', 'https://images-na.ssl-images-amazon.com/images/I/51ttBHCU49L._SX305_BO1,204,203,200_.jpg', 0, 2, 1),
(19, 'American Horror Story', 'Harper Lee', 'https://images-na.ssl-images-amazon.com/images/I/51ttBHCU49L._SX305_BO1,204,203,200_.jpg', 0, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE IF NOT EXISTS `genre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`id`, `name`) VALUES
(1, 'Horror'),
(2, 'Adventure');

-- --------------------------------------------------------

--
-- Table structure for table `librarysection`
--

CREATE TABLE IF NOT EXISTS `librarysection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `librarysection`
--

INSERT INTO `librarysection` (`id`, `name`) VALUES
(1, 'Periodical'),
(2, 'Science and Technology');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `islogin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username_canonical` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_canonical` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `enabled` tinyint(1) NOT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `confirmation_token` varchar(180) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `api_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D64992FC23A8` (`username_canonical`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `email`, `date_created`, `islogin`, `username`, `username_canonical`, `email_canonical`, `salt`, `roles`, `enabled`, `password_requested_at`, `last_login`, `confirmation_token`, `api_token`) VALUES
(1, '', '$2y$13$nQYLT5yIMSPCvyRLw6c5KOTrsUoVE7WwhWFFw4CrhyTwSH3zBYDIa', 'mail@mail.com', NULL, NULL, 'admins', 'admins', 'mail@mail.com', NULL, 'a:0:{}', 0, NULL, '2018-05-22 19:48:29', NULL, ''),
(2, '', '$2y$13$hBD4Alx2b4EMEt/7ArRu5uLwiT8cVCBCMJP1vFsJ/fj7TGHTuhk4O', 'ok.@mail.com', NULL, NULL, 'ok', 'ok', 'ok.@mail.com', NULL, 'a:0:{}', 1, NULL, NULL, NULL, ''),
(3, '', '$2y$13$sVtvAJgRo0f1cRz2hXrYqeqHc9vE2BoxjVBNkUPNwtYQbBUCv/XF6', 'mail@mail', NULL, '1', 'chill', 'chill', 'mail@mail', NULL, 'a:1:{i:0;s:10:\"ROLE_ADMIN\";}', 1, NULL, NULL, NULL, 'f16f0e7bfb16aa908bd220425c73c1e6'),
(4, '', '$2y$13$O7YuBm9N5Ph4DToaSnrKDucofRwbzmTugDXyiDQ2Q2XZ7vu.t5fTS', 'mail@mail.com', NULL, '1', 'mlp', 'mlp', 'mail@mail.com', NULL, 'a:0:{}', 1, NULL, NULL, NULL, 'ee5032f9de8264195895d8bae1d292c9'),
(5, NULL, '$2y$13$Q4Y1DzwJRpeP1xZ7eMwkquOh0QqChdZC9VpI0Y1jVkVQYWgyKWEvq', 'harper@lee.com', NULL, NULL, 'harper', 'harper', 'harper@lee.com', NULL, 'a:1:{i:0;s:10:\"ADMIN_ROLE\";}', 1, NULL, NULL, NULL, NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `FK_CBE5A3314296D31F` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  ADD CONSTRAINT `FK_CBE5A3318F4335EB` FOREIGN KEY (`librarysection_id`) REFERENCES `librarysection` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
