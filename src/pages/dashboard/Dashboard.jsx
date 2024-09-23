import { AttachMoney, Home, HomeOutlined, Money, People, Storefront, TrackChanges, TrendingUp, Visibility, WavingHand } from "@mui/icons-material"
import "./dashboard.css"
import { Slider } from "@mui/material"
import Table from "../../components/table/Table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';

const Dashboard = () => {

  const dealsData = [
    { month: 'Jan', deals: 400 },
    { month: 'Feb', deals: 300 },
    { month: 'Mar', deals: 500 },
    { month: 'Apr', deals: 700 },
    { month: 'May', deals: 200 },
    { month: 'Jun', deals: 600 },
    { month: 'July', deals: 900 },
    { month: 'Aug', deals: 800 },
    { month: 'Sept', deals: 1000 },
    { month: 'Oct', deals: 1100 },
    { month: 'Nov', deals: 500 },
    { month: 'Dec', deals: 400 },
  ];

  const data = [
    { month: 'Jan', sales: 4, avgPrice: 24 },
    { month: 'Feb', sales: 3, avgPrice: 22.1 },
    { month: 'Mar', sales: 5, avgPrice: 22.9 },
    { month: 'Apr', sales: 7, avgPrice: 20 },
    { month: 'May', sales: 2, avgPrice: 21.81 },
    { month: 'Jun', sales: 6, avgPrice: 25},
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-rapper">
        <div className="dashboard-nav">
          <div className="navigation-nav-left">
            <div className="dashboard-nav-icon">
              <Home sx={{fontSize: 30}} />
            </div>
            <div className="dashboard-nav-info">
              <h2>Dashboard</h2>
              <p>It highlights all important informartion of the business</p>
              <p>It highlights all important informartion</p>
            </div>
          </div>

          <div className="navigation-nav-right">
            <HomeOutlined />
            <p>/ Dashboard</p>
          </div>
        </div>

        <div className="dashboard-top">
          <div className="dashboard-top-item">
            <div className="dashboard-top-header">
              <div className="dashboard-top-header-names">
                <p>Total sales</p>
                <h2>$ 23,545</h2>
              </div>
              <div className="dashboard-top-icon">
                <Money />
              </div>
            </div>
            <div className="dashboard-top-bottom">
              <p><span>+11%</span>From previous Month</p>
            </div>
          </div>
          <div className="dashboard-top-item">
            <div className="dashboard-top-header">
              <div className="dashboard-top-header-names">
                <p>Total orders</p>
                <h2>4,545</h2>
              </div>
              <div className="dashboard-top-icon">
                <TrendingUp sx={{color: "#0d5ff7"}} />
              </div>
            </div>
            <div className="dashboard-top-bottom">
              <p><span>+12%</span>From previous Month</p>
            </div>
          </div>
          <div className="dashboard-top-item">
            <div className="dashboard-top-header">
              <div className="dashboard-top-header-names">
                <p>Average price</p>
                <h2>$ 6,543</h2>
              </div>
              <div className="dashboard-top-icon">
                <AttachMoney sx={{color: "#02afa7"}} />
              </div>
            </div>
            <div className="dashboard-top-bottom">
              <p><span>+50%</span>From previous Month</p>
            </div>
          </div>
          <div className="dashboard-top-item">
            <div className="dashboard-top-header">
              <div className="dashboard-top-header-names">
                <p>Product sold</p>
                <h2>1,009</h2>
              </div>
              <div className="dashboard-top-icon">
                <Storefront sx={{color: "#e6a40b"}} />
              </div>
            </div>
            <div className="dashboard-top-bottom">
              <p><span>+52%</span>From previous Month</p>
            </div>
          </div>
        </div>

        <div className="dashboard-sales">
          <div className="dashboard-sales-left">
            <h2>Deals Analytics</h2>
            <div className="dashboard-sales-chart">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dealsData} margin={{ top: 20, right: 3, left: 2, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="deals" fill="#5b04a7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="dashboard-sales-right">
            <div className="dashboard-sales-item">
              <div className="dashboard-sales-item-left">
                <p>Impression</p>
                <h2 className="royalblue-font">1,563</h2>
                <p>Aug 20 - Sept 01 (2024)</p>
              </div>
              <div className="dashboard-sales-item-right">
                <div className="dashboard-sales-icon sales-icon-1">
                  <Visibility />
                </div>
              </div>
            </div>
            <div className="dashboard-sales-item">
              <div className="dashboard-sales-item-left">
                <p>Goal</p>
                <h2 className="royalgreen-font">30,564</h2>
                <p>Aug 20 - Sept 01 (2024)</p>
              </div>
              <div className="dashboard-sales-item-right">
                <div className="dashboard-sales-icon sales-icon-2">
                  <TrackChanges />
                </div>
              </div>
            </div>
            <div className="dashboard-sales-item">
              <div className="dashboard-sales-item-left">
                <p>Impact</p>
                <h2 className="royalgold-font">42.5%</h2>
                <p>Aug 20 - Sept 01 (2024)</p>
              </div>
              <div className="dashboard-sales-item-right">
                <div className="dashboard-sales-icon sales-icon-3">
                  <WavingHand />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-progress-container">
          <h1>Progress</h1>
          <div className="dashboard-progress">
            <div className="dashboard-progress-item">
              <p>Published project</p>
              <h2>532 <span>+1.69%</span></h2>
              <Slider value={20} sx={{ color: '#f33756' }} aria-label="Default" valueLabelDisplay="auto" />
            </div>
            <div className="dashboard-progress-item royalred-font">
              <p>Complete Task</p>
              <h2>4, 569 <span>-0.5%</span></h2>
              <Slider value={50} sx={{ color: '#0d5ff7' }} aria-label="Default" valueLabelDisplay="auto" />
            </div>
            <div className="dashboard-progress-item">
              <p>Successfully Task</p>
              <h2>84% <span>+0.99%</span></h2>
              <Slider value={80} sx={{ color: '#049e80' }} aria-label="Default" valueLabelDisplay="auto" />
            </div>
            <div className="dashboard-progress-item">
              <p>Ongoing project</p>
              <h2>365 <span>+0.35%</span></h2>
              <Slider value={40} sx={{ color: '#e6a40b' }} aria-label="Default" valueLabelDisplay="auto" />
            </div>
          </div>
        </div>

        <div className="dashboard-updates">
          <div className="dashboard-updates-item dashboard-updates-informations">
            <div className="dashboard-updates-infos">
              <div className="dashboard-updates-info">
                <p>Sales in Sept</p>
                <p>$ 34565.5</p>
              </div>
              <div className="dashboard-updates-info">
                <p>Direct Sale</p>
                <p>$ 765</p>
              </div>
              <div className="dashboard-updates-info">
                <p>Referal</p>
                <p>$ 345</p>
              </div>
            </div>
            <div className="dashboard-updates-graph">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                data={data}
                margin={{ top: 20, right: 5, left: 5, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fill: '#F4F5FA' }} />
                <YAxis yAxisId="left" tick={{ fill: '#F4F5FA' }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: '#F4F5FA' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="sales" barSize={20} fill="#d7d7d7" />
                <Line yAxisId="right" type="monotone" dataKey="avgPrice" stroke="#00ff00" />
              </ComposedChart>
            </ResponsiveContainer>
            </div>
          </div>
          <div className="dashboard-updates-item">
            <div className="dashboard-updates-top">
              <h2>New Orders</h2>
              <TrendingUp />
            </div>
            <div className="dashboard-updates-body">
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/chart.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Created 3 weeks ago</p>
                </div>
              </div>
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/chart.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Created 3 weeks ago</p>
                </div>
              </div>
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/chart.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Created 3 weeks ago</p>
                </div>
              </div>
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/chart.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Created 3 weeks ago</p>
                </div>
              </div>
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/chart.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Created 3 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-updates-item">
            <div className="dashboard-updates-top">
              <h2>New Customers</h2>
              <People />
            </div>
            <div className="dashboard-updates-body">
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/user.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Joined 3 weeks ago</p>
                </div>
              </div>
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/user.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Joined 3 weeks ago</p>
                </div>
              </div>
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/user.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Joined 3 weeks ago</p>
                </div>
              </div>
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/user.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Joined 3 weeks ago</p>
                </div>
              </div>
              <div className="dashboard-updates-profile">
                <div className="dashboard-updates-img">
                  <img src="/images/user.png" alt="US" />
                </div>
                <div className="dashboard-updates-desc">
                  <p>John Doe</p>
                  <p>Joined 3 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-products">
          <h2>New Products</h2>
          <div className="dashboard-products-container">
            <Table />
          </div>
        </div>

        <div className="dashboard-footer">
          <p>Copyright ©2024 . Zeal Energy Systems and Recyclers</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard