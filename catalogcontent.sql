-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2023 at 05:44 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dealdocx`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalogcontent`
--

CREATE TABLE `catalogcontent` (
  `content_id` int(11) NOT NULL,
  `content_key` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content_title` varchar(255) DEFAULT NULL,
  `content_org` varchar(255) DEFAULT NULL,
  `content_number` varchar(255) DEFAULT NULL,
  `content_category` varchar(255) DEFAULT NULL,
  `content_locked` varchar(255) DEFAULT '0',
  `content_description` varchar(255) DEFAULT NULL,
  `content_createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content_modifiedon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `catalogcontent`
--

INSERT INTO `catalogcontent` (`content_id`, `content_key`, `user_id`, `content_title`, `content_org`, `content_number`, `content_category`, `content_locked`, `content_description`, `content_createdon`, `content_modifiedon`) VALUES
(1, '9e9e4f6715239b7354756da53cdf7a0f', 1, 'new content ss', 'AP-AUS/JP', '12345', 'new cat', '1', 'issue gett dhdhddhdhdddd', '2023-03-06 21:49:39', '2023-03-06 22:14:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalogcontent`
--
ALTER TABLE `catalogcontent`
  ADD PRIMARY KEY (`content_id`),
  ADD UNIQUE KEY `content_accesskey` (`content_key`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalogcontent`
--
ALTER TABLE `catalogcontent`
  MODIFY `content_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
