"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel, TabContext, TabList } from "@mui/lab";

function RegisterShadow() {
  return (
    <>
      <h1>Reģistrācijas forma</h1>
      <form>
        <TabContext>
          <TabList>
            <Tab key="tab1" label="Pamatdati" value="pamatdati"></Tab>
            <Tab key="tab2" label="Intereses" value="intereses"></Tab>
            <Tab
              key="tab3"
              label="Izglītība un pieredze"
              value="izglitiba"
            ></Tab>
          </TabList>
          <TabPanel value="pamatdati">
            <div>
              <label for="name">
                Vārds, uzvārds
                <input id="name" type="text" required />
              </label>
            </div>
          </TabPanel>
          <TabPanel value="intereses"></TabPanel>
          <TabPanel value="izglitiba"></TabPanel>
        </TabContext>
        <div>
          <button type="submit">Reģistrēties</button>
        </div>
      </form>
    </>
  );
}

export default RegisterShadow;
