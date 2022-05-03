const confirmationMail = (username, session) => {
  const message = `
    <h3>Hello from Mentorpoint👋</h3>
    <p style="font-size:15px;">Hi ${username},</p>
  
    <p style="font-size:15px;">Thanks for using Mentorpoint.</p> 

    <p style="font-size:15px;">This is to confirm that your booking has been confirmed</>
    <p style="font-size:15px;">Session Details:</>
    <p style="font-size:15px;">Session Name: ${session?.name}</>
    <p style="font-size:15px;">Mentor Name: ${session?.mentor}</>

    <p style="font-size:15px;">Soon You will receive a calendar invitation for the same!</>


    <p style="font-size:15px;">Have a great learning!!</>

    <br>
    <br>
    Regards,<br>Mentorpoint App.</h3>
    <br><br><br>
`;
  return message;
};

export default confirmationMail;
