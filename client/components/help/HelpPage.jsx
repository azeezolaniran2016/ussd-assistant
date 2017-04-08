import React from 'react';

const HelpPage = () => (
  <div>
    <h3>What is USSD ?</h3>
    <p>
      USSD (Unstructured Supplementary Service Data) is a Global System for Mobile (GSM)
      communication technology that is used to send text between a mobile phone and an application
      program in the network. Application may include prepaid roaming or mobile chatting.
      It is sometimes referred to as <span className="highlight-text">Quick Codes</span> or
      <span className="highlight-text">Feature codes</span>.
    </p>
    <p>
      For more details about USSD codes, visit the internet.
    </p>
    <h3>
      My Phone is a dual sim phone ?
    </h3>
    <p>
      The app by default selects Sim 1 (or the Sim selected for mobile calls if you set this in
      your phone settings). It remembers this unless you change it in the
      <span className="highlight-text">Remember Last Network</span> option of the application
      <a href="#settings">settings</a>.
    </p>
    <h3>Main Actions</h3>
    <ol>
      <li><a href="#airtime_recharge">Airtime Recharge</a></li>
      <li><a href="#airtime_transfer">Airtime Transfer</a></li>
      <li><a href="#airtime_balance">Airtime Balance</a></li>
      <li><a href="#borrow_airtime">Borrow Airtime</a></li>
      <li><a href="#call_me_back">Call Me Back</a></li>
      <li><a href="#customer_care">Customer Care</a></li>
      <li><a href="#messages">Messages</a></li>
      <li><a href="#phone_book">Phone Book</a></li>
      <li><a href="#other_ussd_codes">Other USSD Codes</a></li>
      <li>
        <a href="#network_website">Refresh Network Provider Homepage</a>
      </li>
      <li>
        <a href="#select_network">
          Open Navigation View (Select other options)
        </a>
      </li>
      <li><a href="#other_options">Settings and other options</a></li>
      <li><a href="#phone_dialer">Quickly Launch your phone dialer app</a>
      </li>
    </ol>
    <img
      src={'http://res.cloudinary.com/dsejp9xxf/image/upload/h_550/v1489520010/home_vbvvpt.png'}
      alt="Home page"
    />
    <h4>
      <a name="airtime_recharge">
        1. Airtime Recharge
      </a>
    </h4>
    <p>
      With a click on button 1 of the main page screen shot, a request is sent to the selected
      network provider (one whos logo appears) in the case of mono-sim card devices. In the case of
      dual-sim device, a prompt to select which sim to send the request with is shown.
    </p>
    <p className="warning">
      Please note that you are expected to select the sim which application is currently set to
      (MTN, in the case of this screen shot).
    </p>
    <h4>
      <a name="airtime_transfer">
        2. Airtime Transfer
      </a>
    </h4>
    <p>
      To transfer airtime from one mobile number to another just click on button 2 of the main page
      screen shot, fill the necessary fields in the dialog prompt that displays and click the
      proceed button on the dialog.
    </p>
    <p className="warning">Please note: As at the time of writing this documentation, transferring
      airtime between different network providers is not allowed. Therefore, it is the
      responsibility of the user to enter correct recipient number (Both sender and recipient must
      be on the same network provider).
    </p>
    <h4><a name="airtime_balance">3. Airtime Balance</a></h4>
    <p>
      With a simple click of on button 3 of the main page screen shot a request to view the users
      account balance is sent to the selected network provider.
    </p>
    <h4><a name="borrow_airtime">4. Borrow Airtime</a></h4>
    <p>
      To borrow airtime just click on button 4 of the main page screen shot. Depending on your
      network providers you might need to fill in necessary fields in the dialog prompt or just
      follow further instructions which will be displayed.
    </p>
    <h4><a name="call_me_back">5. Call Me Back</a></h4>
    <p>
      To send a free <span className="highlight-text">Call me back</span> message to another
      recipient just click on button 5 of the main page screen shot, fill all necessary fields in
      the dialog prompt that displays and press the proceed button.
    </p>
    <p className="warning">
      Please note: As at the time of writing this documentation, sending
      <span className="highlight-text">call me back</span>between different network providers is
      not allowed. Therefore, it is the responsibility of the user to enter correct recipient
      number (Both sender and recipient must be on the same network provider).
    </p>
    <h4><a name="customer_care">6. Customer Care</a></h4>
    <p>
      A click on button 6 of the main page screen shot automatically sends you to the call dialer
      app with your network providers customer care number already dialed.
    </p>
    <h4><a name="messages">7. Go to your Messages</a></h4>
    <p>
      Open the navigation drawer item(
      <img
        src={'http://res.cloudinary.com/dsejp9xxf/image/upload/w_18,h_18/v1489520008/open_nav_drawer_jyavhn.png'}
        alt="Navigation drawer"
      />) and click on the item labelled 7 to open your Message application.
      <br />
      <img
        src={'http://res.cloudinary.com/dsejp9xxf/image/upload/h_550/v1489520009/nav_drawer_yqujtb.png'}
        alt="Navigation Drawer Button"
      />
    </p>
    <h4>
      <a name="phone_book">
        8. Go to Your Phone Book
      </a>
    </h4>
    <p>
      Open the navigation drawer item(
      <img
        src={'http://res.cloudinary.com/dsejp9xxf/image/upload/w_18,h_18/v1489520008/open_nav_drawer_jyavhn.png'}
        alt="Drawer icon"
      />) and click on the item labelled 8 to open your Phone Contacts application.
      <br />
      <img
        src={'http://res.cloudinary.com/dsejp9xxf/image/upload/h_550/v1489520009/nav_drawer_yqujtb.png'}
        alt="Navigation Drawer Button"
      />
    </p>
    <h4><a name="other_ussd_codes">9. Other USSD Codes</a></h4>
    <p>
      To view other USSD Codes just click on button 2 of the main page screen shot.
    </p>
    <p>
      Use the <span className="highlight-text">Add</span> button (
      <img
        src={'http://res.cloudinary.com/dsejp9xxf/image/upload/w_18,h_18/v1489520008/add_other_ussd_codes_okp7po.png'}
        alt="Add Other USSD Codes"
      />)
      to add other USSD codes of your own.
      (<img
        src={
          'http://res.cloudinary.com/dsejp9xxf/image/upload/h_550/v1489520009/other_codes_dklfx7.png'
        } alt="View other USSD Codes"
      />)
      <br />Long click on any of the listed USSD codes to either
      <span className="warning">Delete</span>, <span className="highlight-text">Edit</span> or
      <span className="highlight-text">Dial</span> the code. Click
      on any USSD code to simply dial the clicked code.
    </p>
    <h4>
      <a name="network_website">
        10. Refresh Network Provider Homepage
      </a>
    </h4>
    <p>
      Click the refresh network icon(option 10) to refresh the network providers home page.
    </p>
    <h4>
      <a name="select_network">
        11. Select Network Provider and other options
      </a>
    </h4>
    <p>
      Click on the button to open the navigation options item (
        <img
          src={'http://res.cloudinary.com/dsejp9xxf/image/upload/w_18,h_18/v1489520008/open_nav_drawer_jyavhn.png'}
          alt="Open Navigation Drawer Button"
        />
      ) and select your desired network provider from the list of available network providers
      shown. or select other options available
    </p>
    <h4><a name="other_options">12. Settings and other options</a></h4>
    <p>
      Click on this button for options to:
    </p>
    <ul>
      <li>Check about this app.</li>
      <li>View the help document of this app.</li>
      <li>Contact the developer of this app.</li>
      <li>Launch the <a href="#settings">settings </a> option of the app</li>
      <li>Quit the app</li>
    </ul>
    <h4>
      <a name="phone_dialer">
        13. Quickly Launch your phone dialer app
      </a>
    </h4>
    <p>
      Get quick access to your phone dialer application. Launch that newly advertized USSD code.
      Remember to save the code as well through the
      <a href="#other_ussd_codes">
        Other USSD Codes
      </a> option.
    </p>
    <h4><a name="settings">Settings</a></h4>
    <p>
      There are 3 options which you can set. These are:
    </p>
    <ul>
      <li>
        Enable Notification: Enable this option to allow a notification to be displayed whenever
        the app is inactive. This is for easy access to the app.
      </li>
      <li>
        Remeber Network: Enable this option if you are using a dual sim phone. It enables the app
        to start from the last selected network. It is recommended that you disable this option if
        you are not using a dual sim phone.
      </li>
      <li>
        Remeber Last Inputs: Enable this option if you want certain inputs in various input dialogs
        in the app to be remebered next time you launch them. It is recommended to keep this option
        checked.
      </li>
    </ul>
    <p className="warning">
      Please note: On dual sim phones you are expected to select the right network
      provider in the <i>select sim</i> prompt which pops up whenever you try to launch an action.
    </p>
  </div>
);

export default HelpPage;
