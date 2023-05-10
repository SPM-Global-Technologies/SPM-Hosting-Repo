-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2023 at 08:34 AM
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
-- Table structure for table `quotes`
--

CREATE TABLE `quotes` (
  `quotes_id` int(11) NOT NULL,
  `account_id` varchar(300) NOT NULL,
  `opportunity_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quotes_name` varchar(300) DEFAULT NULL,
  `template_type` varchar(300) NOT NULL,
  `quotes_price` varchar(300) DEFAULT NULL,
  `quotes_sales_org` varchar(300) DEFAULT NULL,
  `quotes_currency` varchar(300) DEFAULT NULL,
  `quotes_duration` varchar(300) DEFAULT NULL,
  `quotes_avg_rate` varchar(300) DEFAULT NULL,
  `quotes_description` longtext,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quotes`
--

INSERT INTO `quotes` (`quotes_id`, `account_id`, `opportunity_id`, `user_id`, `quotes_name`, `template_type`, `quotes_price`, `quotes_sales_org`, `quotes_currency`, `quotes_duration`, `quotes_avg_rate`, `quotes_description`, `created_on`, `modified_on`) VALUES
(1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 1, '1', 'titless', NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-27 21:48:38', '2023-03-27 21:48:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`quotes_id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `opportunity_id` (`opportunity_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `template_type` (`template_type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quotes`
--
ALTER TABLE `quotes`
  MODIFY `quotes_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
