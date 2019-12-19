--
-- Base de données :  `hackathon2`
--
CREATE DATABASE IF NOT EXISTS `hackathon2` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `hackathon2`;

--
-- Structure de la table `enigmes`
--

CREATE TABLE `enigmes` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `numero` int(2) NOT NULL,
  `resultat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `enigmes`
--

INSERT INTO `enigmes` VALUES(1, 'demo', 1, '12345');
INSERT INTO `enigmes` VALUES(2, 'demo', 2, 'azerty');

--
-- Index pour la table `enigmes`
--
ALTER TABLE `enigmes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour la table `enigmes`
--
ALTER TABLE `enigmes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
