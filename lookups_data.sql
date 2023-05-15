-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2023 at 08:30 AM
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
-- Table structure for table `lookups_data`
--

CREATE TABLE `lookups_data` (
  `lookups_data_id` int(11) NOT NULL,
  `lookups_data_accesskey` varchar(255) NOT NULL,
  `lookups_accesskey` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `lookups_name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `value1` varchar(255) DEFAULT NULL,
  `value2` varchar(255) DEFAULT NULL,
  `disable` int(11) NOT NULL DEFAULT '0',
  `createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifiedon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lookups_data`
--

INSERT INTO `lookups_data` (`lookups_data_id`, `lookups_data_accesskey`, `lookups_accesskey`, `user_id`, `lookups_name`, `code`, `value1`, `value2`, `disable`, `createdon`, `modifiedon`) VALUES
(1, 'c04e8c3b5292c08ed56ca55c8efb8e25', 'e142bcb4cb89453533a81bde5d5f8335', 1, 'yes', 'yes', '3', '', 0, '2023-05-09 21:13:05', '2023-05-09 21:13:05'),
(2, 'ea9308e1c7e592262cc782354b50fbd0', 'e142bcb4cb89453533a81bde5d5f8335', 1, 'no', 'no', '2', '', 1, '2023-05-09 21:13:16', '2023-05-09 21:13:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lookups_data`
--
ALTER TABLE `lookups_data`
  ADD PRIMARY KEY (`lookups_data_id`),
  ADD UNIQUE KEY `lookups_data_accesskey` (`lookups_data_accesskey`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `lookups_accesskey` (`lookups_accesskey`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lookups_data`
--
ALTER TABLE `lookups_data`
  MODIFY `lookups_data_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
