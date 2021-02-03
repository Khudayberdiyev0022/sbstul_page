import React from 'react'

const Table = () => {
    return (
        <div>
            <table className="border" style={{width: "100%" , textAlign: "center"}}>
                <thead className="border">
                    <tr style={{background: "lightblue"}} className="border">
                        <th className="border">Т/р</th>
                        <th className="border">Тингловчининг Ф.И.Ш.</th>
                        <th className="border">ЖАМИ ТЎПАЛАГАН <br/> БАЛЛ</th>
                    </tr>
                </thead>
                <tbody className="border">
                    <tr style={{background: "lightgreen"}}>
                        <td className="border">1</td>
                        <td className="border">Консбаев Махмуд Ахметкулович</td>
                        <td className="border">70,5</td>
                    </tr>
                    <tr style={{background: "lightgreen"}} className="border">
                        <td className="border">2</td>
                        <td className="border">Килишбаев Саламат Ворозалиевич</td>
                        <td className="border">70,5</td>
                    </tr>
                    <tr style={{background: "lightgreen"}}>
                        <td className="border">3</td>
                        <td className="border">Тангиров Отабек Уралович</td>
                        <td className="border">70,5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
