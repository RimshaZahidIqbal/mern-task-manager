import React, { useContext, useEffect, useState } from 'react'
import moment from "moment";
import { useNavigate } from 'react-router-dom';
import { IoMdCard } from "react-icons/io"
import { useUserAuth } from '../../Hooks/useUserAuth'
import { UserContext } from '../../context/userContext';
import { DashboardLayout } from '../../components/layouts';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/cards/InfoCard';
import { addThousandsSeperator } from "../../utils/helper"
const Dashboard = () => {
    useUserAuth();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState(null);
    const [pieChatData, setPieChatData] = useState(null);
    const [barChartData, setBarChartData] = useState(null);

    const getDashboardData = async () => {
        try {
            const response = await axiosInstance.get(
                API_PATHS.TASKS.GET_DASHBOARD_DATA
            );
            if (response.data) {
                setDashboardData(response.data);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    useEffect(() => {
        getDashboardData();
        return () => { };
    }, []);
    return (
        <DashboardLayout activeMenu="Dashboard">
            <div className='card my-5'>
                <div className="">
                    <div className="col-span-3">
                        <h2 className='text-xl md:text-2xl'>Greetings! {user?.name}</h2>
                        <p className='text-xs md:text-[13px] text-gray-400 mt-1.5'>
                            {moment().format("dddd Do MMM YYYY")}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 mt-5">
                    <InfoCard
                        // icon={<IoMdCard />}
                        label="Total Tasks"
                        value={addThousandsSeperator(
                            dashboardData?.charts?.taskDistribution?.All || 0
                        )}
                        color="bg-primary"
                    />
                    <InfoCard
                        // icon={<IoMdCard />}
                        label="Pending Tasks"
                        value={addThousandsSeperator(
                            dashboardData?.charts?.taskDistribution?.Pending || 0
                        )}
                        color="bg-violet-500"
                    />
                    <InfoCard
                        // icon={<IoMdCard />}
                        label="In Progress Tasks"
                        value={addThousandsSeperator(
                            dashboardData?.charts?.taskDistribution?.InProgress || 0
                        )}
                        color="bg-cyan-500"
                    />
                    <InfoCard
                        // icon={<IoMdCard />}
                        label="Completed Tasks"
                        value={addThousandsSeperator(
                            dashboardData?.charts?.taskDistribution?.Completed || 0
                        )}
                        color="bg-lime-500"
                    />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard