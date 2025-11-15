import React, { useState } from 'react';
import ResponsiveAdminLayout from '../../components/ResponsiveAdminLayout';
import ResponsiveForm, { FormField } from '../../components/ResponsiveForm';

const SendEmail = () => {
  const [sendTo, setSendTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ sendTo, subject, body });
  };

  return (
    <ResponsiveAdminLayout title="Send Email">
      <div className="max-w-3xl">
        <ResponsiveForm onSubmit={handleSubmit} title="">
          <FormField label="Send to" required>
            <select
              value={sendTo}
              onChange={(e) => setSendTo(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Select</option>
              <option value="all-crm-users">All CRM Users</option>
              <option value="all-clients">All Clients</option>
              <option value="all-ibs">All IBs</option>
            </select>
          </FormField>

          <FormField label="Subject" required>
            <input
              type="text"
              placeholder="Enter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </FormField>

          <FormField label="Body" required>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent h-48 sm:h-64"
              required
            />
          </FormField>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </ResponsiveForm>
      </div>
    </ResponsiveAdminLayout>
  );
};

export default SendEmail;
