# Description

This is a web app that displays the results of a simple projection model for NHL players. The projection model identifies similar players and uses their career arcs to predict the subsequent career of a target player. This project is inspired by 538's CARMELO model (https://projects.fivethirtyeight.com/carmelo/).

# Site

The web app can be viewed at: [LINK]

# Model:

This model uses a comparable-based approach to predict the next five seasons of a player's career in terms of points-per-sixty. A player's top ten comparables are computed using euclidian distance. Input statistics are height, weight, draft position, goals-per-sixty, shots-per-sixty, shooting-percentage, expected-goals-per-sixty, scoring-chances-per-sixty, high-danger-shots-per-sixty, rebounds-created-per-sixty, first-assists-per-sixty, second-assists-per-sixty, rush-attempts-per-sixty, penalties-drawn-per-sixty, time-on-ice, and time-on-ice-per-game. These statistics are meant to give a stylistic picture of a player's offensive game. As the output variable is points-per-sixty, which is a purely offensive statistic, only offensive statistics (and biographic details like height and weight) are used.

- "Per-sixty" statistics are calculated by dividing a player's statistic total (eg: total goals) by their time-on-ice, then multiplying by sixty.

# Views:

There are three distinct views:

1. Projection: A line chart displaying the actual results for the player's last three seasons, and their projected results for the next five seasons.
2. Skills Profile: A horizontal bar chart displaying the input statistics that feed the model (shown in in standard deviations).
3. Comparables: The player's ten closest comparables. For each comparable player, their name, season, similarity score, and a line chart displaying their career arc.

# Next Steps:

This is a basic iteration of a model and site. Potential extensions that I may pursue in the future include:

- Identifying player comparables using a blend of results over a player's past three seasons, rather than just one
- Formulating the player's projection based on a weighted average (dependent on similarity) of _all_ other players, rather than just the ten most similar
- Weigh input statistics differently depending on their predictive importance. For example, intution suggests that goals-per-sixty are more significant in identifying effective comparables than height or weight. Currently, all input statistics are weighted equally.
- Incorporate different game states. This model uses all-situations statistics. A more robust approach would separate statistics by game state: even strength, powerplay, shorthanded, etc
- Use an all-encompassing output statistic like Wins Above Replacement in order to capture both offensive and defensive impacts
- Allow site views to be exported as images
