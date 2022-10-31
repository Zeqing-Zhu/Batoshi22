import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 99.11;
  const diff = 20;
  const curTotalMws = 15;
  /*
  {
                    'minerID': machine.minerID,
                    'brand': machine.brand,
                    'model': machine.model,
                    'monitoringTime': machine.monitoringTime,
                    'curStatus': machine.curStatus,
                    'curPower': machine.curPower,
                    'curHashRate': machine.curHashRate,
                    'curPowerRatio': machine.curPowerRatio,
                    'ratedPower': machine.ratedPower,
                    'ratedHashRate': machine.ratedHashRate,
                    'ratedPowerRatio': machine.ratedPowerRatio
  }
*/

  switch (type) {
    case "user":
      data = {
        title: "Online Rate",
        isMoney: false,
        link: "Details",
        amount: "95%",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Qualified rate",
        isMoney: false,
        link: "Details",
        amount:"92%",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Percentage of HashRate",
        isMoney: false,
        link: "Details",
        amount: "101%",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Current MWs",
        isMoney: true,
        link: "Details",
        amount: "45.5MW",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "="} {data.amount} 
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
