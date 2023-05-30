-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2023 at 08:30 AM
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
  `parent_lookups_key` varchar(255) DEFAULT NULL,
  `lookups_status` int(10) NOT NULL DEFAULT '0',
  `createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifiedon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lookups`
--

INSERT INTO `lookups` (`lookups_id`, `user_id`, `lookups_accesskey`, `class_name`, `parent_lookups_key`, `lookups_status`, `createdon`, `modifiedon`) VALUES
(1, 1, 'e142bcb4cb89453533a81bde5d5f8335', 'hi yash', NULL, 0, '2023-05-09 21:12:51', '2023-05-09 21:12:51'),
(2, 1, '1ad1b6058e6fde0bff52698a498c38e8', 'huu', 'e142bcb4cb89453533a81bde5d5f8335', 0, '2023-05-22 22:14:49', '2023-05-22 22:14:49'),
(3, 1, 'efd481bf1a147a9f75237688fe56f51c', 'ddd', NULL, 0, '2023-05-22 22:22:51', '2023-05-22 22:22:51'),
(4, 1, 'c99b98426ab91839bed0ab0a15b8a5c3', 'hii', NULL, 0, '2023-05-24 06:34:02', '2023-05-24 06:34:02'),
(5, 1, 'c9a9e32cbf5fc12f67cbe89507036c4c', 'hi', NULL, 0, '2023-05-24 06:36:19', '2023-05-24 06:36:19'),
(6, 1, 'e84d726831abd374cf68c79dcfd485a8', 'hello', NULL, 0, '2023-05-24 06:38:51', '2023-05-24 06:38:51'),
(7, 1, 'f7fa39a6cf6afae5ebeab4e5318a6e26', 'hiello', NULL, 0, '2023-05-24 06:40:59', '2023-05-24 06:40:59'),
(8, 1, '535408e0057f0dc2ee1ede3ef774b6e3', 'kj', NULL, 0, '2023-05-24 06:51:55', '2023-05-24 06:51:55'),
(9, 1, '0324caa9aea6fc2d011d27d900d72d1e', 'kjh', NULL, 0, '2023-05-24 06:56:10', '2023-05-24 06:56:10'),
(10, 1, '500b00edf29377ff97bbc66b1b65e66b', 'khj', NULL, 0, '2023-05-24 06:56:59', '2023-05-24 06:56:59'),
(11, 1, 'a9cfaef98db4f9c90e11584a8c14b79d', 'helloss', NULL, 0, '2023-05-24 06:58:18', '2023-05-24 06:58:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lookups`
--
ALTER TABLE `lookups`
  ADD PRIMARY KEY (`lookups_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `parent_lookups_key` (`parent_lookups_key`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lookups`
--
ALTER TABLE `lookups`
  MODIFY `lookups_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
