import React from 'react';
import { Control, Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@ui/common/Button';
import { Input } from '@ui/common/Input';
import { Select } from '@ui/common/Select';

type OrganizationSetting = {
  organizationName: string;
  inviteMembers: { label: string; value: string }[];
  removeMembers: { label: string; value: string }[];
};

const options = [
  { label: 'idris@ccb.com', value: 'idris' },
  { label: 'john@ccb.com', value: 'john' },
];

export const OrganizationSettingForm = () => {
  
  const { register, handleSubmit, control } = useForm<OrganizationSetting>({
    defaultValues: {
      inviteMembers: [],
      removeMembers: [{ label: 'john@ccb.com', value: 'john' }],
    },
  });

  const onSubmit: SubmitHandler<OrganizationSetting> = (data) => {
    console.log(data);
  };

  return (
    <div className=" rounded-lg bg-gray-50 p-4 sm:p-10">
      <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl">
        Organization Settings
      </h3>
      <form
        className="mt-10 grid gap-10 md:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border p-2">
          <Input label="Organization Name" {...register('organizationName')} />
        </div>
        <div className="border p-2">
          <Controller
            control={control}
            name="inviteMembers"
            render={({ field: { onChange, value } }) => (
              <Select
                isCreatable
                isMulti
                label="Invite Members"
                onChange={onChange}
                options={options}
                value={value}
              />
            )}
          />
        </div>
        <div className="col-span-full border p-2">
          <Controller
            control={control}
            name="removeMembers"
            render={({ field: { onChange, value } }) => (
              <Select
                isCreatable
                isMulti
                label="Remove Member"
                onChange={onChange}
                options={options}
                value={value}
              />
            )}
          />
        </div>
        <div className="col-span-full">
          <div className="flex  flex-col-reverse items-center justify-between gap-6 md:flex-row">
            <Button
              className="block w-full md:max-w-[200px]"
              type="reset"
              variants="error"
            >
              Delete Organization
            </Button>
            <div className="flex w-full gap-4 md:w-max">
              <Button
                className="block w-full border border-gray-400 hover:border-gray-100 md:w-[200px]"
                type="button"
                variants="neutral"
              >
                Cancel
              </Button>
              <Button className="block w-full md:w-[200px]" type="submit">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
