-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2023 at 06:58 AM
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
-- Table structure for table `opportunity`
--

CREATE TABLE `opportunity` (
  `opportunity_id` int(11) NOT NULL,
  `account_id` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  `opportunity_name` varchar(200) DEFAULT NULL,
  `net_price` varchar(255) DEFAULT NULL,
  `margin` varchar(255) DEFAULT NULL,
  `cost` int(150) DEFAULT NULL,
  `stage` varchar(255) DEFAULT NULL,
  `probability` varchar(255) DEFAULT NULL,
  `hours` varchar(255) DEFAULT NULL,
  `close` varchar(255) DEFAULT NULL,
  `start` varchar(255) DEFAULT NULL,
  `duration_weeks` varchar(255) DEFAULT NULL,
  `owner` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `vertical` varchar(255) DEFAULT NULL,
  `practice` varchar(255) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `org` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `status` varchar(100) DEFAULT 'pending',
  `parent_opportunity` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT NULL,
  `opp_type` varchar(255) DEFAULT NULL,
  `permission_type` varchar(255) DEFAULT NULL,
  `list_price` varchar(255) DEFAULT NULL,
  `discount` int(12) DEFAULT NULL,
  `avg_rate` int(12) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `delivery_manager` varchar(255) DEFAULT NULL,
  `due_date` varchar(255) DEFAULT NULL,
  `template_quote` varchar(255) DEFAULT NULL,
  `billingstreet1` varchar(255) DEFAULT NULL,
  `billingstreet2` varchar(255) DEFAULT NULL,
  `billingcity` varchar(255) DEFAULT NULL,
  `billingstate` varchar(255) DEFAULT NULL,
  `billingzip` int(12) DEFAULT NULL,
  `billingcountry` varchar(255) DEFAULT NULL,
  `billingphone` int(12) DEFAULT NULL,
  `shippingstreet1` varchar(255) DEFAULT NULL,
  `shippingstreet2` varchar(255) DEFAULT NULL,
  `shippingcity` varchar(255) DEFAULT NULL,
  `shippingstate` varchar(255) DEFAULT NULL,
  `shippingzip` int(12) DEFAULT NULL,
  `shippingcountry` varchar(255) DEFAULT NULL,
  `shippingphone` int(12) DEFAULT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `opportunity`
--

INSERT INTO `opportunity` (`opportunity_id`, `account_id`, `user_id`, `opportunity_name`, `net_price`, `margin`, `cost`, `stage`, `probability`, `hours`, `close`, `start`, `duration_weeks`, `owner`, `region`, `vertical`, `practice`, `currency`, `org`, `type`, `status`, `parent_opportunity`, `account`, `opp_type`, `permission_type`, `list_price`, `discount`, `avg_rate`, `description`, `delivery_manager`, `due_date`, `template_quote`, `billingstreet1`, `billingstreet2`, `billingcity`, `billingstate`, `billingzip`, `billingcountry`, `billingphone`, `shippingstreet1`, `shippingstreet2`, `shippingcity`, `shippingstate`, `shippingzip`, `shippingcountry`, `shippingphone`, `created_on`, `modified_on`) VALUES
(1, '3cc2291930b4e6e34eb54feee0c8ab52', 1, 'yees', '01', '10', 2, 'QUALIFY', '1', '0', '2023-03-01', '2023-03-02', '1', 'owners', 'EMEA', 'BANKING', 'DSOM', 'AFN', 'ALL OTHER AP', 'CONSULTING SERVICES OPPORTUNITY', 'REQUESTED', 'hi', 'yesyoyo', 'CONSULTING SERVICES OPPORTUNITY', 'CONFIDENTIAL', '23', 12, 1, 'sdd', 'NO RESULT FOUND', '2023-03-03', 'BMC DEAL REVIEW REPORT', 'ees', 'fff', 'ddd', 'kar', 3445, 'rrrr', 3555566, 'dddddd', 'fffffd', 'ffff', '3eedd', 3333, 'dddd', 234344, '2023-03-02 21:25:25', '2023-03-02 21:46:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `opportunity`
--
ALTER TABLE `opportunity`
  ADD PRIMARY KEY (`opportunity_id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `opportunity`
--
ALTER TABLE `opportunity`
  MODIFY `opportunity_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
