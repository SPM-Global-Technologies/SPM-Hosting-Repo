-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2023 at 05:33 AM
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
-- Table structure for table `accounts`
--

-- CREATE TABLE `accounts` (
--   `account_id` int(11) NOT NULL,
--   `user_id` int(11) NOT NULL,
--   `accounts` varchar(255) DEFAULT NULL,
--   `owner` varchar(255) DEFAULT NULL,
--   `parent_account` varchar(255) DEFAULT NULL,
--   `description` varchar(255) DEFAULT NULL,
--   `region` varchar(255) DEFAULT NULL,
--   `industry` varchar(255) DEFAULT NULL,
--   `vertical` varchar(255) DEFAULT NULL,
--   `type` varchar(255) DEFAULT NULL,
--   `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `modified_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

-- INSERT INTO `accounts` (`account_id`, `user_id`, `accounts`, `owner`, `parent_account`, `description`, `region`, `industry`, `vertical`, `type`, `created_on`, `modified_on`) VALUES
-- (1, 1, 'hii', '', '', '', NULL, NULL, NULL, NULL, '2023-02-20 08:29:00', '2023-02-20 08:29:00'),
-- (2, 1, 'hii', '', '', '', NULL, NULL, NULL, NULL, '2023-02-20 08:29:51', '2023-02-20 08:29:51');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `email`, `phone_number`, `password`, `createdon`) VALUES
(1, 'yashwanth', 'gowda', 'yashwanthgowda2433@gmail.com', '8550812238', '$2a$08$IZ6QrM.feDtxrKa5EFIOx.rE/jvwM.2uxDdF2/8UdnEq1gqFwSE3y', '2023-02-09 15:38:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
