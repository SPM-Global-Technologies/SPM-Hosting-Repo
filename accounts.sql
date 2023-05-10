-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2023 at 04:48 PM
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

CREATE TABLE `accounts` (
  `account_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `accounts` varchar(255) DEFAULT NULL,
  `owner` varchar(255) DEFAULT NULL,
  `parent_account` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `vertical` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `billing_street1` varchar(300) DEFAULT NULL,
  `billing_street2` varchar(300) DEFAULT NULL,
  `billing_city` varchar(150) DEFAULT NULL,
  `billing_state` varchar(150) DEFAULT NULL,
  `billing_zip` int(10) DEFAULT NULL,
  `billing_country` varchar(100) DEFAULT NULL,
  `billing_phone` bigint(12) DEFAULT NULL,
  `shipping_street1` varchar(300) DEFAULT NULL,
  `shipping_street2` varchar(300) DEFAULT NULL,
  `shipping_city` varchar(150) DEFAULT NULL,
  `shipping_state` varchar(100) DEFAULT NULL,
  `shipping_zip` int(10) DEFAULT NULL,
  `shipping_country` varchar(100) DEFAULT NULL,
  `shipping_phone` bigint(15) DEFAULT NULL,
  `excelrate_partner` varchar(150) DEFAULT NULL,
  `commercial_region` varchar(255) DEFAULT NULL,
  `commercial_subregion` varchar(255) DEFAULT NULL,
  `vat_number` varchar(150) DEFAULT NULL,
  `delivery_area` varchar(300) DEFAULT NULL,
  `access_key` varchar(155) DEFAULT NULL,
  `notes` varchar(400) DEFAULT NULL,
  `external_refrences_id1` varchar(255) DEFAULT NULL,
  `external_refrences_id2` varchar(255) DEFAULT NULL,
  `crm_refrence` varchar(255) DEFAULT NULL,
  `file_path` text,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`account_id`, `user_id`, `accounts`, `owner`, `parent_account`, `description`, `region`, `industry`, `vertical`, `type`, `billing_street1`, `billing_street2`, `billing_city`, `billing_state`, `billing_zip`, `billing_country`, `billing_phone`, `shipping_street1`, `shipping_street2`, `shipping_city`, `shipping_state`, `shipping_zip`, `shipping_country`, `shipping_phone`, `excelrate_partner`, `commercial_region`, `commercial_subregion`, `vat_number`, `delivery_area`, `access_key`, `notes`, `external_refrences_id1`, `external_refrences_id2`, `crm_refrence`, `file_path`, `created_on`, `modified_on`) VALUES
(1, 1, 'hii', 'yashu', 'hello', 'hi description yes yo', 'critical', 'critical', 'BANKING', 'PROSPECT', NULL, NULL, NULL, NULL, 0, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '3cc2291930b4e6e34eb54feee0c8ab52', 'hi yash', 'hi', 'hi', 'crm', '', '2023-02-20 08:29:00', '2023-02-28 21:15:51'),
(2, 1, 'hii', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', '3cc2291930b4e6e34eb54feee0c8ab53', '', '', '', '', '', '2023-02-20 08:29:51', '2023-02-20 08:29:51'),
(3, 1, 'hii', 'owner', 'hello', 'hi description', 'critical', 'critical', 'high', 'medium', 'hh', 'hh', 'hhh', 'uhhh', 8444, 'inf', 844994, 'hhh', 'hjj', 'jjj', 'ksar', 55667, 'inf', 848944, NULL, NULL, NULL, NULL, NULL, '3cc2291930b4e6e34eb54feee0c8ab54', '', '', '', '', '', '2023-02-20 21:27:44', '2023-02-20 21:27:44'),
(4, 1, 'hii', 'owner', 'hello', 'hi description', 'critical', 'critical', 'high', 'medium', 'hh', 'hh', 'hhh', 'uhhh', 8444, 'inf', 844994, 'hhh', 'hjj', 'jjj', 'ksar', 55667, 'inf', 848944, NULL, NULL, NULL, NULL, NULL, '3cc2291930b4e6e34eb54feee0c8ab55', 'hi', '', '', '', '', '2023-02-20 21:31:42', '2023-02-28 21:17:58'),
(5, 1, 'hii2', 'owner', 'hello', 'hi description', 'AP', 'BUSINESS SERVICESl', 'CHEMICALS', 'PROSPECT', 'hh', 'hh', 'hhh', 'uhhh', 56677, 'india', 8550812338, 'hhh', 'hjj', 'jjj', 'ksar', 33445, 'inf', 33556676, NULL, NULL, NULL, NULL, NULL, '3cc2291930b4e6e34eb54feee0c8ab51', '', '', '', '', '', '2023-02-28 20:31:55', '2023-02-28 20:31:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`),
  ADD UNIQUE KEY `access_key` (`access_key`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
