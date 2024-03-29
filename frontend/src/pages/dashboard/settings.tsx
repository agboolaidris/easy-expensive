import { ReactElement } from 'react';
import { DashboardHeader } from '@ui/common/DashboardHeader';
import { DashboardLayout } from '@ui/layout/DashboardLayout';
import { OrganizationSettingForm } from '@ui/module/settings/OrganisationSettingForm';
import { PersonalSettingForm } from '@ui/module/settings/PersonalSettingForm';
import Head from 'next/head';

import { NextPageWithLayout } from '../_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="mx-auto max-w-7xl space-y-10 pb-10">
        <DashboardHeader
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptate
          nisi quam repudiandae. Possimus, veritatis. Atque, iusto sunt?
          Praesentium reiciendis"
          tip="Personal and organization settings"
          title="Settings"
        />
        <OrganizationSettingForm />

        <PersonalSettingForm />
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Home;
