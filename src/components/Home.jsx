import axios from "axios"
import { useState } from "react"

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

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleClickSearch() {
        const params = new URLSearchParams(formData).toString()
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.get(import.meta.env.VITE_APP_ENDPOINT + '/ict/search?' + params, config)
            .then((response) => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text" >Period from</span>
                        <input type="date" className="form-control" name="period1" onChange={handleChange} />
                        <span className="input-group-text" >To</span>
                        <input type="date" className="form-control" name="period2" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text" >ICT No</span>
                        <input type="text" className="form-control" name="ict_no" maxLength={15} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text" >Model</span>
                        <input type="text" className="form-control" name="model" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">File Name</span>
                        <input type="text" className="form-control" name="file_name" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">Item</span>
                        <input type="text" className="form-control" name="item" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">Operator Name</span>
                        <input type="text" className="form-control" name="operator_name" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group input-group-sm mb-1">
                        <span className="input-group-text">Programming File</span>
                        <input type="text" className="form-control" name="programming_file" maxLength={50} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={handleClickSearch}>Search</button>
                        <button type="button" className="btn btn-outline-primary">Reset search criteria</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table align-middle table-sm table-bordered">
                            <thead className="text-center">
                                <tr>
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
                                <tr>
                                    <th>Gilang</th>
                                    <th>Rico</th>
                                    <th>Adi S</th>
                                    <th>Sanawi</th>
                                    <th>Kiswanto</th>
                                    <th>Muttaqin</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}