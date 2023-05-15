-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2023 at 08:29 AM
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
-- Table structure for table `lookups`
--

CREATE TABLE `lookups` (
  `lookups_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `lookups_accesskey` varchar(255) NOT NULL,
  `class_name` varchar(255) NOT NULL,
  `lookups_status` int(10) NOT NULL DEFAULT '0',
  `createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifiedon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lookups`
--

INSERT INTO `lookups` (`lookups_id`, `user_id`, `lookups_accesskey`, `class_name`, `lookups_status`, `createdon`, `modifiedon`) VALUES
(1, 1, 'e142bcb4cb89453533a81bde5d5f8335', 'hi yash', 0, '2023-05-09 21:12:51', '2023-05-09 21:12:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lookups`
--
ALTER TABLE `lookups`
  ADD PRIMARY KEY (`lookups_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lookups`
--
ALTER TABLE `lookups`
  MODIFY `lookups_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
