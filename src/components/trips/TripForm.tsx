import { FC } from "react";
import { Trip } from "../../types/Trip";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface TripFormProps {
  trip: Trip;
  cancelEdit: () => void;
  saveTrip: (tripId: number, body: Trip) => void;
}

interface Values {
  tripName: string;
  description: string;
  startDate: string;
  endDate: string;
}

const TripForm: FC<TripFormProps> = ({ trip, cancelEdit, saveTrip }) => {
  const { name, description, start_date, end_date } = trip;

  return (
    <>
      <Formik
        initialValues={{
          tripName: name ? name : "",
          description: description ? description : "",
          startDate: start_date ? start_date : "",
          endDate: end_date ? end_date : "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setSubmitting(true);
          saveTrip(trip.id, {
            id: trip.id,
            name: values.tripName,
            description: values.description,
            start_date: values.startDate,
            end_date: values.endDate,
          });
        }}
      >
        <Form className="space-y-6 pb-5">
          <div className="bg-white px-4 py-5 sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
              <div className="mt-5 space-y-6 md:mt-0 md:col-span-2">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <Field
                        type="text"
                        name="tripName"
                        id="tripName"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Italy Trip"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <Field
                      type="text"
                      id="description"
                      name="description"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Wine tasting in Tuscany"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <div className="mt-1">
                    <Field
                      id="startDate"
                      name="startDate"
                      type="date"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <div className="mt-1">
                    <Field
                      id="endDate"
                      name="endDate"
                      type="date"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => cancelEdit()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
                // saveTrip(trip.id, e);
              }}
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default TripForm;
