import React, {useEffect, useState} from "react";
import "./HighscorePlayer.scss"
import {useParams} from "react-router-dom";
import {getSkillLevelByXP, getSkillNameByID, SKILL_NAME} from "./SkillEnum";
import fetch from "node-fetch";

function HighscoresPlayer({props}) {
    let { username } = useParams()
    const [skillXP, setSkillXP] = useState([]);
    const [skillRanks, setSkillRanks] = useState([]);
    const [totalRank, setTotalRank] = useState();

    username.replace("+", " ")
    const fetchSkills = async () => {
        const response = await fetch(window.location.origin + "/api/highscores");
        let playerData = await response.json();
        let skillXPArr = []
        let skillRankArr = []
        let rank = -1;
        for(let i = 0; i < playerData.length; i++) {
            if(playerData[i].username.toLowerCase() === username.toLowerCase()) {
                for(let skillI = 0; skillI < 25; skillI++)
                    skillXPArr.push(playerData[i].xp[skillI])
            }
        }
        function sortSkill(skillI) {
            if(skillI >=0 && skillI <= 24)
                return function (user1, user2) {
                    if (user1.xp[skillI] < user2.xp[skillI])
                        return 1
                    else if (user1.xp[skillI] > user2.xp[skillI])
                        return -1
                    else if (user1.xp[skillI] == user2.xp[skillI])
                        return -1
                    return 0
                }
            return function (user1, user2) {
                if(user1.totalLevel < user2.totalLevel)
                    return 1
                else if(user1.totalLevel > user2.totalLevel)
                    return -1
                else if(user1.totalLevel == user2.totalLevel)
                    if(user1.totalXp < user2.totalXp)
                        return 1
                    else if(user1.totalXp > user2.totalXp)
                        return -1
                return 0
            }
        }
        for(let i = 0; i < 25; i++) {
            playerData.sort(sortSkill(i));
            for(let j = 0; j < playerData.length; j++) {
                if(playerData[j].username.toLowerCase() === username.toLowerCase()) {
                    skillRankArr.push(j+1)
                }
            }
        }
        playerData.sort(sortSkill(-1))
        for(let i = 0; i < playerData.length; i++) {
            if(playerData[i].username.toLowerCase() === username.toLowerCase()) {
                rank = i+1;
            }
        }
        setSkillXP(skillXPArr)
        setSkillRanks(skillRankArr)
        setTotalRank(rank)
    };
    useEffect(() => {
        fetchSkills();
    }, [username]);

    const submitPlayerSearch = event => {//username search
        if(event.key === 'Enter') {
            let username = event.target.value.replace(" ", "+")
            if (typeof window !== 'undefined')
                window.location = "/highscores/player/" + username
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="main-container-highscores-player">
                    <div className="sub-container-highscores-player">
                        <div className="header-highscores-player">
                            <h1><span id="player-id">{username}</span></h1>
                            <div><h2><span id="player-rank">{totalRank}</span></h2></div>
                        </div>
                        <div className="sub-header-hs">
                            <h2 id="hs-overall">Overall Stats</h2>
                            <div className="flex flex-jc-c">
                                <input id="search-user-hs" type="text" name="Username" placeholder="Search Username" defaultValue="" onKeyPress={submitPlayerSearch}/>
                            </div>
                        </div>
                        <div className="flex flex-jc-c">
                            <table>
                                <thead>
                                    <th id="rank">Rank</th>
                                    <th id="player">Skill</th>
                                    <th id="level">Level</th>
                                    <th id="exp">Total Exp</th>
                                </thead>
                                {
                                    SKILL_NAME.map(
                                        (skill, skillIndex) => {
                                            return (
                                                <tbody>
                                                    <tr className="row-hover1">
                                                        <td>{skillRanks[skillIndex]}</td>
                                                        <td id="player">
                                                            <div className="flex flex-ai-c"><img className="skill-icon" src={"/skill_icons/" + skill + ".png"}/>{skill}</div>
                                                        </td>
                                                        <td>{getSkillLevelByXP(skillXP[skillIndex], skillIndex)}</td>
                                                        <td>{skillXP[skillIndex]}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        }
                                    )
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HighscoresPlayer;