-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2023 at 05:53 PM
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
-- Table structure for table `bid_estimation`
--

CREATE TABLE `bid_estimation` (
  `bid_estimation_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `account_id` varchar(200) NOT NULL,
  `opportunity_id` int(11) NOT NULL,
  `template_type` varchar(255) NOT NULL,
  `level` varchar(255) DEFAULT NULL,
  `unit_price` varchar(255) DEFAULT NULL,
  `bid_price` varchar(255) DEFAULT NULL,
  `workload` varchar(255) DEFAULT NULL,
  `csp_workload` varchar(255) DEFAULT NULL,
  `csp_avg_cost` varchar(255) DEFAULT NULL,
  `non_billable` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bid_estimation`
--

INSERT INTO `bid_estimation` (`bid_estimation_id`, `user_id`, `account_id`, `opportunity_id`, `template_type`, `level`, `unit_price`, `bid_price`, `workload`, `csp_workload`, `csp_avg_cost`, `non_billable`, `country`, `role`, `role_description`, `notes`, `created_on`, `modified_on`) VALUES
(1, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', 'L4 PROJECT MANAGER', '60', '2', '1', '3', '', '', '', '', '', '', '2023-03-23 21:51:19', '2023-03-23 21:51:19'),
(2, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 21:51:19', '2023-03-23 21:51:19'),
(3, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 21:51:19', '2023-03-23 21:51:19'),
(4, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 21:51:19', '2023-03-23 21:51:19'),
(5, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 21:51:19', '2023-03-23 21:51:19'),
(6, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', 'L4 PROJECT MANAGER', '60', '2', '1', '3', '', '', '', '', '', '', '2023-03-23 22:19:07', '2023-03-23 22:19:07'),
(7, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 22:19:07', '2023-03-23 22:19:07'),
(8, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 22:19:08', '2023-03-23 22:19:08'),
(9, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 22:19:08', '2023-03-23 22:19:08'),
(10, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 22:19:08', '2023-03-23 22:19:08'),
(11, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', 'L4 PROJECT MANAGER', '60', '2', '1', '3', '', '', '', '', '', '', '2023-03-23 22:22:59', '2023-03-23 22:22:59'),
(12, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 22:23:00', '2023-03-23 22:23:00'),
(13, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 22:23:00', '2023-03-23 22:23:00'),
(14, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 22:23:00', '2023-03-23 22:23:00'),
(15, 1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'titless', '', '', '', '', '', '', '', '', '', '', '', '2023-03-23 22:23:00', '2023-03-23 22:23:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bid_estimation`
--
ALTER TABLE `bid_estimation`
  ADD PRIMARY KEY (`bid_estimation_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `opportunity_id` (`opportunity_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bid_estimation`
--
ALTER TABLE `bid_estimation`
  MODIFY `bid_estimation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
