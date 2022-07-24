import logo from './logo.svg';
import './teamColors.scss';
import React, {useState} from "react";
import qbs from './players/qbs'
import wrs from './players/wrs'
import rbs from './players/rbs'
import tes from './players/tes'
import Qb from "./positions/Qb";
import Wr from "./positions/Wr";
import Rb from './positions/Rb';
import Te from './positions/Te';


function App() {
    const [quarterBack, setQuarterBack] = useState(qbs[0])
    const [wideReceiver, setWideReceiver] = useState(wrs[0])
    const [runningBack, setRunningBack] = useState(rbs[0])
    const [tightEnd, setTightEnd] = useState(tes[0])
    const [teamName, setTeamName] = useState("Pitter Paterson")
    const [leagueName, setLeagueName] = useState("League of Extraordinary Genitals")
    const [year, setYear] = useState("23")
    const [placing, setPlacing] = useState("1")

    const createOptions = players => {
        return players.map(player => {
            return (
                <option key={player.name} value={player.name}>{player.name}</option>
            )
        })
    }

    return (
        <div>
            <div id="inputs">
                <div>
                    <label>
                        League Name
                    </label>
                    <input type="text" value={leagueName} onChange={e => setLeagueName(e.target.value)}/>
                </div>
                <div>
                    <label>
                        Team Name
                    </label>
                    <input type="text" value={teamName} onChange={e => setTeamName(e.target.value)}/>
                </div>
                <div>
                    <label>
                        Placing
                    </label>
                    <select
                        onChange={e => setPlacing(e.target.value)}
                        value={placing}
                    >
                        <option>1</option>
                        <option>2</option>

                    </select>
                </div>
                <div>
                    <label>
                        Year
                    </label>
                    <select
                        onChange={e => setYear(e.target.value)}
                        value={year}
                    >
                        <option>23</option>
                        <option>22</option>
                        <option>21</option>
                        <option>20</option>
                        <option>19</option>
                        <option>18</option>
                    </select>
                </div>
            </div>
            <div id="selects">
                <div>
                    <label>
                        Quarterback
                    </label>
                    <select
                        onChange={e => {
                            const qb = qbs.filter(qb => qb.name === e.target.value)[0]
                            setQuarterBack(qb)
                        }}
                        value={quarterBack.name}
                    >
                        {createOptions(qbs)}
                    </select>
                </div>
                <div>
                    <label>
                        Tight end
                    </label>
                    <select
                        onChange={e => {
                            const te = tes.filter(te => te.name === e.target.value)[0]
                            setTightEnd(te)
                        }}
                        value={tightEnd.name}
                    >
                        {createOptions(tes)}
                    </select>
                </div>
                <div>
                    <label>
                        Running Back
                    </label>
                    <select
                        onChange={e => {
                            const rb = rbs.filter(rb => rb.name === e.target.value)[0]
                            setRunningBack(rb)
                        }}
                        value={runningBack.name}
                    >
                        {createOptions(rbs)}
                    </select>
                </div>
                <div>
                    <label>
                        Wide Receiver
                    </label>
                    <select
                        onChange={e => {
                            const wr = wrs.filter(wr => wr.name === e.target.value)[0]
                            setWideReceiver(wr)
                        }}
                        value={wideReceiver.name}
                    >
                        {createOptions(wrs)}
                    </select>
                </div>

            </div>
            <br/>
            <div id="poster">
                <div id="leagueName">{leagueName}</div>
                <div id="leagueChampion">{placing === "1" ? "League Champion" : "Runner Up"} '{year}</div>
                <div id="teamName">{teamName}</div>
                <Qb quarterBack={quarterBack}/>
                <Wr wideReceiver={wideReceiver}/>
                <Rb runningBack={runningBack}/>
                <Te tightEnd={tightEnd}/>
            </div>
        </div>
    );
}

export default App;
