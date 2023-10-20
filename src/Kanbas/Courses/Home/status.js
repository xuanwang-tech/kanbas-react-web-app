import { FaFileImport, FaChartBar, FaRegBell } from "react-icons/fa";
import { BiTargetLock, BiSolidRightArrowSquare } from "react-icons/bi"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { BsFill2CircleFill, BsCalendarMinus } from "react-icons/bs"

function Status() {
    return (
        <div className="course-status">
            <div className="container mb-2">

                <a href="#" className="btn btn-light text-start w-100 mb-1">
                    {<FaFileImport />} Import Existing Content
                </a>
                <a href="#" className="btn btn-light text-start w-100 mb-1">
                    {<FaFileImport />} Import From Commons
                </a>
                <a href="#" className="btn btn-light text-start w-100 mb-1">
                    {<BiTargetLock />} Choose Home Page
                </a>

                <a href="#" className="btn btn-light text-start w-100 mb-1">
                    {<FaChartBar />} View Course Stream
                </a>

                <a href="#" className="btn btn-light text-start w-100 mb-1">
                    {<HiOutlineSpeakerphone />} New Announcement
                </a>

                <a href="#" className="btn btn-light text-start w-100 mb-1">
                    {<FaChartBar />} New Analytics
                </a>

                <a href="#" className="btn btn-light text-start w-100 mb-1">
                    {<FaRegBell />} View Course Notifications
                </a>
            </div>

            <div className="container">
                <div className="row mt-3">
                    <h6>To Do</h6>
                    <hr />
                    <div className="row">
                        <div className="col-1" style={{ color: "red" }}>
                            {<BsFill2CircleFill />}
                        </div>
                        <div className="col-10">
                            <div>Grade A1 - ENV + HTML</div>
                            <p className="text-body-secondary">100 points * Sep 18 at 11:59pm</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-1" style={{ color: "red" }}>
                            {<BsFill2CircleFill />}
                        </div>
                        <div className="col-10">
                            <div>Grade A2 - CSS + BOOTSTRAP</div>
                            <p className="text-body-secondary">100 points * Sep 18 at 11:59pm</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="d-flex justify-content-between align-items-center mb-0">
                        <h6>Coming Up</h6>
                        <div className="">
                            {<BsCalendarMinus />} View Calendar
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-2">
                            {<BiSolidRightArrowSquare />}
                        </div>
                        <div className="col-10">
                            <a href="#" className="text-danger text-decoration-none">Lecture</a>
                            <p className="text-body-secondary">CS4550.12631.202410 Sep 7 at
                                11:45am</p>
                        </div>
                        <div className="col-2">
                            {<BiSolidRightArrowSquare />}
                        </div>
                        <div className="col-10">
                            <a href="#" className="text-danger text-decoration-none">CS5610 06
                                SP23
                                Lecture</a>
                            <p className="text-body-secondary">CS4550.12631.202410 Sep 7 at
                                11:45am</p>
                        </div>
                        <div className="col-2">
                            {<BiSolidRightArrowSquare />}
                        </div>
                        <div className="col-10">
                            <a href="#" className="text-danger text-decoration-none">CS5610 Web
                                Development
                                Summer 1 2023 - LECTURE</a>
                            <p className="text-body-secondary">CS4550.12631.202410 Sep 11 at
                                11:45am</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Status;