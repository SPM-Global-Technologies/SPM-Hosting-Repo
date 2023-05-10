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
-- Table structure for table `catalog_questions`
--

CREATE TABLE `catalog_questions` (
  `catalog_questions_id` int(11) NOT NULL,
  `catalog_section_key` varchar(255) NOT NULL,
  `catalog_questions_key` varchar(255) NOT NULL,
  `catalog_key` varchar(200) NOT NULL,
  `catalog_section_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `catalog_questions_num` varchar(200) NOT NULL,
  `catalog_questions_name` varchar(400) NOT NULL,
  `catalog_questions_required` int(11) NOT NULL DEFAULT '0',
  `catalog_questions_toggle` varchar(100) NOT NULL,
  `created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `catalog_questions`
--

INSERT INTO `catalog_questions` (`catalog_questions_id`, `catalog_section_key`, `catalog_questions_key`, `catalog_key`, `catalog_section_id`, `user_id`, `catalog_questions_num`, `catalog_questions_name`, `catalog_questions_required`, `catalog_questions_toggle`, `created_on`, `modified_on`) VALUES
(1, '', '', '0d553471b066ebc822c35bb4e053dee6', 3, 1, '', '', 0, '', '2023-04-02 18:02:56', '2023-04-02 18:02:56'),
(2, '', '', '0d553471b066ebc822c35bb4e053dee6', 3, 1, '', '', 0, '', '2023-04-02 18:02:56', '2023-04-02 18:02:56'),
(3, '', '', '0d553471b066ebc822c35bb4e053dee6', 3, 1, '', '', 0, '', '2023-04-02 18:02:56', '2023-04-02 18:02:56'),
(4, '', '', '0d553471b066ebc822c35bb4e053dee6', 5, 1, '', '', 0, '', '2023-04-02 18:04:53', '2023-04-02 18:04:53'),
(5, '', '', '0d553471b066ebc822c35bb4e053dee6', 5, 1, '', '', 0, '', '2023-04-02 18:04:53', '2023-04-02 18:04:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `catalog_questions`
--
ALTER TABLE `catalog_questions`
  ADD PRIMARY KEY (`catalog_questions_id`),
  ADD KEY `catalog_key` (`catalog_key`),
  ADD KEY `catalog_section_id` (`catalog_section_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `catalog_section_key` (`catalog_section_key`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `catalog_questions`
--
ALTER TABLE `catalog_questions`
  MODIFY `catalog_questions_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
