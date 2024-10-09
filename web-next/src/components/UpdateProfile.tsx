"use client";
import React, { useState } from "react";

export default function UpdateProfile(): JSX.Element {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("ChanBeDu");
  const [displayName, setDisplayName] = useState<string>(
    "Nguyen Hien Anh Khoa"
  );
  const [password, setPassword] = useState<string>("conconcon123");
  const [gmail, setGmail] = useState<string>("khoa.ngkhoa27@gmail.com");
  const [timeCreateAccount, setTimeCreateAccount] =
    useState<string>("20/2/2024");

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleCancel = () => {
    setIsEdit(false);
  };
  const handleGmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-4/5 mx-auto text-black">
      <h1 className="text-2xl font-bold text-center mb-4">My Profile</h1>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="block text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            value={username}
            disabled
            className="mt-1 block w-full px-3 py-2 bg-slate-300 border border-indigo-500/50 rounded-md text-sm"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="block text-sm font-medium text-slate-700">
            Display Name
          </span>
          <input
            type="text"
            value={displayName}
            className="mt-1 block w-full px-3 py-2 bg-slate-300 border border-indigo-500/50 rounded-md text-sm"
          />
        </label>
        <div className="flex mt-2">
          <button className="bg-blue-500 mr-3 text-white px-4 py-1 rounded-md">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">
            Cancel
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="block text-sm font-medium text-slate-700">
            Gmail
          </span>
          <input
            type="text"
            value={gmail}
            onChange={handleGmailChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-indigo-500/50 rounded-md text-sm"
          />
        </label>
        <div className="flex mt-2">
          <button className="bg-blue-500 mr-3 text-white px-4 py-1 rounded-md">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">
            Cancel
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-indigo-500/50 rounded-md text-sm"
          />
        </label>
        <div className="flex mt-2">
          <button className="bg-blue-500 mr-3 text-white px-4 py-1 rounded-md">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">
            Cancel
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          <span className="block text-sm font-medium text-slate-700">
            Time Create Account
          </span>
          <input
            type="text"
            value={timeCreateAccount}
            disabled
            className="mt-1 block w-full px-3 py-2 bg-slate-300 border border-indigo-500/50 rounded-md text-sm"
          />
        </label>
      </div>
    </div>
  );
}
