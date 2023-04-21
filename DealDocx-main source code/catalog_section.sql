-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2023 at 08:34 AM
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
-- Table structure for table `catalog_section`
--

CREATE TABLE `catalog_section` (
  `catalog_section_id` int(11) NOT NULL,
  `catalog_section_key` varchar(255) NOT NULL,
  `catalog_key` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  `catalog_section_number` varchar(200) NOT NULL,
  `catalog_section_title` varchar(200) NOT NULL,
  `catalog_section_status` int(11) NOT NULL DEFAULT '0',
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `catalog_section`
--

INSERT INTO `catalog_section` (`catalog_section_id`, `catalog_section_key`, `catalog_key`, `user_id`, `catalog_section_number`, `catalog_section_title`, `catalog_section_status`, `created_on`, `modified_on`) VALUES
(1, '', '0d553471b066ebc822c35bb4e053dee6', 1, '1', 'hiii', 0, '2023-04-02 18:02:30', '2023-04-02 18:02:30'),
(2, '', '0d553471b066ebc822c35bb4e053dee6', 1, '2', 'hlo', 0, '2023-04-02 18:02:30', '2023-04-02 18:02:30'),
(3, '', '0d553471b066ebc822c35bb4e053dee6', 1, '1', 'hiii', 0, '2023-04-02 18:02:55', '2023-04-02 18:02:55'),
(4, '', '0d553471b066ebc822c35bb4e053dee6', 1, '2', 'hlo', 0, '2023-04-02 18:02:55', '2023-04-02 18:02:55'),
(5, '', '0d553471b066ebc822c35bb4e053dee6', 1, '1', 'hiii', 0, '2023-04-02 18:04:53', '2023-04-02 18:04:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalog_section`
--
ALTER TABLE `catalog_section`
  ADD PRIMARY KEY (`catalog_section_id`),
  ADD KEY `catalog_key` (`catalog_key`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalog_section`
--
ALTER TABLE `catalog_section`
  MODIFY `catalog_section_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
