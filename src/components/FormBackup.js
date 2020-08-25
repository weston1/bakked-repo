;<form
  name="contact"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  {/* You still need to add the hidden input with the form name to your JSX form */}
  <input type="hidden" name="form-name" value="contact" />
  <div className="py-2">
    <label className="Form--Label">
      <input
        className="Form--Input Form--InputText"
        type="text"
        placeholder="Name*"
        name="firstname"
        required
      />
      <span>Name*</span>
    </label>
  </div>

  <div className="py-2">
    <label className="Form--Label">
      <input
        className="Form--Input Form--InputText"
        type="email"
        placeholder="Email*"
        name="emailAddress"
        required
      />
      <span>Email*</span>
    </label>
  </div>

  <div className="py-2">
    <label className="Form--Label">
      <input
        className="Form--Input Form--InputText"
        inputmode="numeric"
        pattern="[0-9]*"
        placeholder="Phone"
        maxLength="11"
        name="phone"
        type="tel"
        required
      />
      <span>#-###-###-####</span>
    </label>
  </div>

  <div className="py-2">
    <label className="Form--Label">
      <input
        className="Form--Input Form--InputText"
        inputmode="numeric"
        pattern="[0-9]*"
        maxLength="5"
        placeholder="Zip Code*"
        name="zip"
        required
      />
      <span>Zip*</span>
    </label>
  </div>
  <div className="py-2">
    <label className="Form--Label Form-Checkbox">
      <input
        className="Form--Input Form--Textarea Form--CheckboxInput"
        name="newsletter"
        type="checkbox"
        defaultChecked
        required
      />
      <span>Opt-in for emails</span>
    </label>
  </div>
  <input type="hidden" name="form-name" value="contact" name="newsletter" />
  <p>
    <button type="submit" className="Button Form--SubmitButton">
      SUBMIT
    </button>
  </p>
</form>
