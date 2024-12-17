'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import getDataUser from '@/hooks/get-data-user';

export interface User {
  firstName: string,
  lastName: string,
}

interface UserContextData {
  user: User | null;
  setUser: (user: User) => void;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    getDataUser().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextData => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};