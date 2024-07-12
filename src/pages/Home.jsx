import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import '../home.css'
export default function Home() {
    const [formData, setFormData] = useState({
        period1: "",
        period2: "",
        ict_no: "",
        model: "",
        file_name: "",
        item: "",
        operator_name: "",
        programming_file: "",
    })
    const [rowData, setRowData] = useState({ data: [] })

    const [isSearching, setIsSearching] = useState(false)
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        let aTable = document.getElementById('coba')
        let aStack1 = document.getElementById('stack1')
        let aStack2 = document.getElementById('stack2')
        let aStack3 = document.getElementById('stack3')
        let aStack4 = document.getElementById('stack4')
        let aStack5 = document.getElementById('stack5')
        let aStack6 = document.getElementById('stack6')
        let aStack7 = document.getElementById('stack7')
        let aStack8 = document.getElementById('stack8')
        aTable.style.cssText = `height: ${window.innerHeight
            - aStack1.offsetHeight
            - aStack2.offsetHeight
            - aStack3.offsetHeight
            - aStack4.offsetHeight
            - aStack5.offsetHeight
            - aStack6.offsetHeight
            - aStack7.offsetHeight
            - aStack8.offsetHeight
            - 100
            }px`

        console.log(window.innerHeight)
    }, [])

    function handleClickSearch() {
        const params = new URLSearchParams(formData).toString()
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        setIsSearching(true)
        axios.get(import.meta.env.VITE_APP_ENDPOINT + '/ict/search?' + params, config)
            .then((response) => {
                const datanya = response.data.data
                setRowData({
                    data: datanya
                })
                setIsSearching(false)
            }).catch(error => {
                setIsSearching(false)
                console.log(error)
            })
    }


    return (
        <>
            <div className="row mt-3" id="stack1">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text" >Period from</span>
                        <input type="date" className="form-control" name="period1" onChange={handleChange} />
                        <span className="input-group-text" >To</span>
                        <input type="date" className="form-control" name="period2" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row" id="stack2">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text" >ICT No</span>
                        <input type="text" className="form-control" name="ict_no" maxLength={15} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row" id="stack3">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text" >Model</span>
                        <input type="text" className="form-control" name="model" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row" id="stack4">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">File Name</span>
                        <input type="text" className="form-control" name="file_name" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row" id="stack5">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">Item</span>
                        <input type="text" className="form-control" name="item" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row" id="stack6">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">Operator Name</span>
                        <input type="text" className="form-control" name="operator_name" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row" id="stack7">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">Programming File</span>
                        <input type="text" className="form-control" name="programming_file" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row" id="stack8">
                <div className="col-md-6 mb-3">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" disabled={isSearching} onClick={handleClickSearch}>Search</button>
                        <button type="button" className="btn btn-outline-primary">Reset search criteria</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive" id="coba">
                        <table className="table align-middle table-sm table-bordered">
                            <thead className="text-center">
                                <tr className="first">
                                    <th rowSpan={2} className="align-middle">Date</th>
                                    <th rowSpan={2} className="align-middle">Time</th>
                                    <th rowSpan={2} className="align-middle">ICT No</th>
                                    <th rowSpan={2} className="align-middle">Model</th>
                                    <th rowSpan={2} className="align-middle">File Name</th>
                                    <th rowSpan={2} className="align-middle">Step</th>
                                    <th rowSpan={2} className="align-middle">Device</th>
                                    <th rowSpan={2} className="align-middle">Item</th>
                                    <th rowSpan={2} className="align-middle">Before Value</th>
                                    <th rowSpan={2} className="align-middle">After Value</th>
                                    <th rowSpan={2} className="align-middle">Operator Name</th>
                                    <th rowSpan={2} className="align-middle">User Level</th>
                                    <th rowSpan={2} className="align-middle">Program File</th>
                                    <th colSpan={6} className="text-center">Checked By</th>
                                    <th rowSpan={2} className="align-middle">Remark</th>
                                </tr>
                                <tr className="second">
                                    <th>Gilang</th>
                                    <th>Rico</th>
                                    <th>Adi S</th>
                                    <th>Sanawi</th>
                                    <th>Kiswanto</th>
                                    <th>Muttaqin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    isSearching ? <tr><td colSpan={20}>Please wait</td></tr> : rowData.data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.ICT_Date}</td>
                                            <td>{item.ICT_Time}</td>
                                            <td>{item.ICT_No}</td>
                                            <td>{item.ICT_Model}</td>
                                            <td>{item.ICT_NFile}</td>
                                            <td>{item.ICT_Step}</td>
                                            <td>{item.ICT_Device}</td>
                                            <td>{item.ICT_Item}</td>
                                            <td>{item.ICT_BValue}</td>
                                            <td>{item.ICT_AValue}</td>
                                            <td>{item.ICT_Lupby}</td>
                                            <td>{item.ICT_Level}</td>
                                            <td>{item.ICT_PFile}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}